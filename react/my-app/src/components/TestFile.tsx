interface Props {
  n : string
}


const TestFile = (data: Props): JSX.Element => {
  return (
    <div>
        <p>This data is got from props in react. {data.n}</p>
    </div>
  )
}

export default TestFile