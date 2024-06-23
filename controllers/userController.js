const users= [
    {
        name:"John",
        email:"john@gmail.com"
    },
    {
        name:"Jane",
        email:"jane@gmail.com"
    }
]

const message="Hello World!"

export const getUsers = async (req, res) => {
  try {
    res.render('index', { users,message });
  } catch (err) {
    res.status(500).send(err);
  }
};
