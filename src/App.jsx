import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>CICD JENKINS DEMO<br></br></h1>
      </div>
      <div>
      <h4>
        Is source code uses Git repo and branch /main . In <b>Build Triggers</b>
        select <i>Poll SCM</i> and set schedule to <b>* * * * *</b> to check for changes every minute.
        <br></br>
        <br></br>
        In <b>Build Steps </b> add <b>Windoes batch command</b><br></br>
        call npm install<br></br>
        call npm run build<br></br>
        <br></br>
        rmdir /S /Q "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"<br></br>
mkdir "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"<br></br>
xcopy /E /I /Y dist\* "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"<br></br>
      </h4>

      </div>
    </>
  )
}

export default App
