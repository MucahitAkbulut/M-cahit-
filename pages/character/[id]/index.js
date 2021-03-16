
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Link from  'next/link'


const defaultEndpoint = "https://rickandmortyapi.com/api/character";

export async function getServerSideProps( {query} ){
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}/${id}`);
  const data = await res.json();

  return{
    props:{
        data
    }
  }
}

export default function Character({data}) {
const { name, image, gender, loction, origin, species, status} = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>{ name }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


<main className={styles.main}>
     
        <h1 className={styles.title}>
              { name }
        </h1>
    <div className = "profile">
      <div className = "profile-image"> 
        <img src= {image} alt = {name} />
        </div>
        <div className = "profile-details"> 
        <h2> Charcte Details </h2>
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Status:</strong> {status}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Species:</strong> {species}
          </li>
          <li>
            <strong>Originally From:</strong> {origin?.name}
          </li>
        </ul>
        <label for="w3review">comments</label><br></br>
        <textarea id="w3review" name="w3review" rows="4" cols="40">
          </textarea>
        <br></br>
       <input type="submit" value="Submit"></input>
    
   
      </div>

    </div>
    
<p className={styles.back}>
    <Link href="/"> 
          <a>
          Back to Main Menu
          </a>
          </Link>
 </p>
 <p className={styles.back}>
 
 </p>
</main>   
    </div>
  )
  
}

