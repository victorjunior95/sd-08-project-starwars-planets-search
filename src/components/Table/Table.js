<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    { function.map((something, index) => {
      <tr key={ index }>
        <td>{ something.name }</td>
      </tr>
    })}
  </tbody>
</table>