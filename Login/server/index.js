const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userdataModel = require('./models/userdata');
const userModel = require('./models/users');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors((
  {
    origin:["http://courserecomghrcemn.app/"],
    methods:["POST","GET"],
    credentials: true
  }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://avinashmadnani05:avinash@cluster0.p0wo2.mongodb.net/recom?retryWrites=true&w=majority&appName=Cluster0
});
// Define routes
app.get('/test', (req, res) => {
  res.send('Hello, World!');
})
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  userdataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("success")
        } else {
          res.json("Incorrect Password")
        }
      } else {
        res.json("No user found")
      }
    })
    .catch(err => res.status(500).json({ message: 'Error finding user', error: err }));
})

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const user = new userdataModel({ name, email, password });
  user.save()
    .then(() => res.json({ message: 'User created successfully' }))
    .catch(err => res.status(500).json({ message: 'Error creating user', error: err }));
});

app.post('/UserInput', (req, res) => {
  console.log('Received request to /UserInput');
  recompageModel.create(req.body)
  user.save()
    .then(() => res.json({ message: 'User created successfully' }))
    .catch(err => res.status(500).json({ message: 'Error creating user', error: err }));
});
   

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})

// app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const User = require('./models/user'); // Import the User model
// const childProcess = require('child_process');
// const recompageModel = require('./models/recompage');
// const recom_websiteModel = require('./models/recom_website');

// const app = express();
// const port = 3000;
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/recom', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Failed to connect to MongoDB', err));

// // Define routes
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email: email });
//     if (user) {
//       if (user.password === password) {
//         res.json({ message: "success" });
//       } else {
//         res.json({ message: "Incorrect Password" });
//       }
//     } else {
//       res.json({ message: "No user found" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post('/signup', async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post('/UserInput', (req, res) => {
//   const { userId, interests, pastExperience, skills } = req.body;

//   // Log the input for verification
//   console.log('Received user input:', { userId, interests, pastExperience, skills });

//   recompageModel.create(req.body)
//       .then(recom => res.json(recom))
//       .catch(err => res.json(err));

//   // // Run the Python script
//   // const pythonProcess = childProcess.spawn('python', ['input.py', userId, interests, pastExperience, skills]);

//   // let resultData = '';
  
//   // pythonProcess.stdout.on('data', (data) => {
//   //   resultData += data.toString();
//   // });

//   // pythonProcess.stderr.on('data', (data) => {
//   //   console.error(`Python error: ${data}`);
//   // });

//   // pythonProcess.on('close', (code) => {
//   //   console.log(`Python process exited with code ${code}`);
    
//   //   if (code === 0) { // Only send response if there were no errors
//   //     res.send({ result: resultData });
//   //   } else {
//   //     res.status(500).send(`Python script exited with code ${code}`);
//   //   }
//   // });
// });


// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
