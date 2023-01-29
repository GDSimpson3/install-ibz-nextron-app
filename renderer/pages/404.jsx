import Link from 'next/link'
export default function functionEN() {
    // var dates = Date.now()
    console.log("%cFetch status: Green", "color: green; font-size: 25px");
  
    // console.log("It was a success");
    return (
      // test
      <div className="container-div">
       <h1 style={{textAlign:"center"}}>Whoops, looks like you made a wrong turn.....</h1>

{/* <h1 className='heading'><u>Welcome, Please select a language before you continue.</u></h1> */}
{/* <h1 className='heading'><u>Willkommen, bitte wählen Sie eine Sprache aus, bevor Sie fortfahren.</u></h1> */}
<hr />

<Link href="/" >
    <button className='Button'>Root</button>
</Link>

<Link href="/EN" >
    <button className='Button'>EN</button>
</Link>

<Link href="/DE" >
    <button className='Button'>DE</button>
</Link>


<hr/>
<h2>Try heading to one of the above links ^</h2>
      </div>
    );
  }