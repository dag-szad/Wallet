import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = 5000
const secretKey = process.env.SECRET_KEY

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err))

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema)

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body
  const passwordHash = await bcrypt.hash(password, 10)
  const user = new User({ username, email, password_hash: passwordHash })

  try {
    await user.save()
    res.status(201).send('User registered')
  } catch (error) {
    res.status(400).send(error.message)
  }
})

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })

  if (user && (await bcrypt.compare(password, user.password_hash))) {
    const token = jwt.sign(
      { id: user._id, username: user.username },
      secretKey,
      { expiresIn: '1h' }
    )
    res.json({ token })
  } else {
    res.status(401).send('Invalid username or password')
  }
})

// Middleware
function authenticateToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]
  if (!token) return res.status(401).send('Access Denied')

  try {
    const verified = jwt.verify(token, secretKey)
    req.user = verified
    next()
  } catch (err) {
    res.status(400).send('Invalid Token')
  }
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
