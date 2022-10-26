import Link from "next/link"

export default function FirstPost(){
  return(
    <>
      <h1>First Post!</h1>
      <Link href="/">Back to main page </Link>
      <img  style={{heigth: '30%', width:'30%'}} src="/images/Ava.png" />
    </>
  ) 
}