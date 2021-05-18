import Table from 'react-bootstrap/Table'
import { format } from 'timeago.js'

export default function Tab({ data }) {
  return (
    <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th colSpan="2">{data.name}</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((key, index) => {
          if (key === '_id' || key === 'name') return
          if (typeof data[key] === 'boolean') { // boolean
            return (
              <tr key={index}>
                <td>{key}</td>
                {data[key]
                  ? <td className="text-primary">Up</td>
                  : <td className="text-danger">Down</td>
                }
              </tr>
            )
          }
          if (key === 'Last Ran') { // date
            return (
              <tr key={index}>
                <td>{key}</td>
                <td>{format(data[key])}</td>
              </tr>
            )
          }
          return (
            <tr key={index}>
              <td>{key}</td>
              <td>{data[key]}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
