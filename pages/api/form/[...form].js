

export default function HandleForm(req, res) {

  // Generate uuid
  console.log(req.body)
  console.log(req.body.comment)
  console.log('test')

  return res.json({forms: [{id: '213', name: 'Feedback', submissions: 0, today: 0, domain: 'singupy.com', link: '/forms/dsad'}, { id: '4123', name: 'test form', submissions: 0, today: 0, domain: 'singupy.com', link: '/forms/dsad'}]})

  // Add to DB { uuid, owner, domain, actions }

  // Set cors

  // Find form in db

  // validate data

  // submit data for form

  // peform actions on form

  // do exit (redirect/thank you page)
}