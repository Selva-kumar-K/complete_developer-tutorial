import TestFile from "./components/TestFile"

function App() {

  interface WeatherProps{
    text : string
  }

  const handleClick = (text : string): void => {

    alert(text)
  }

  const GetWeatherData = (props : WeatherProps) : JSX.Element => {
    const text = `The weather is ${props.text}`
    return <h1 onClick={() => handleClick(text)}>Click to see the alert!</h1>
  }

  return(
    <>
    <GetWeatherData text="sunny"/>
    <TestFile n="selva"/>
    </>
  )

}

export default App;
