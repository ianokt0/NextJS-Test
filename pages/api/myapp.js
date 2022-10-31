// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    datas: [
      {
        name: "John Tor 1",
        description: "Mukanya Jontor"
      },
      {
        name: "John Tor 2",
        description: "Mukanya Jontor"
      },
      {
        name: "John Tor 3",
        description: "Mukanya Jontor"
      },
      {
        name: "John Tor 4",
        description: "Mukanya Jontor"
      },
      {
        name: "John Tor 5",
        description: "Mukanya Jontor"
      }
    ]
  })
}
