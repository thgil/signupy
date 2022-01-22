import  { Client as  FaunaClient, query as q } from 'faunadb'

const client = new FaunaClient({
  secret: process.env.FAUNA_SECRET,
  scheme: "https",
  domain: "db.eu.fauna.com"
})

export default function NewForm(req, res) {
  // authicathe useer


  // Generate uuid
  console.log(req.body)
  console.log(req.body.name)
  console.log(req.body.domain)

  try {
    const result = client.query(q.CreateCollection({name: q.NewId()}))
    // const result = client.query(q.Create(q.Collection('forms'), { data: { id: 'A2dDQZS', name: 'test' }}))
    .catch( err => { throw new Error(err) })

    // Add this to user form

    return res.json({name: 'test', submissions: 0, today: 0, domain: 'singupy.com'})
    // Add to DB { uuid, owner, domain, actions }
  } catch (err) {
    console.error(err)
  }
}