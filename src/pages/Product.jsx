import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/header/Header'
import Card from '../components/card/Card'
import axios from 'axios'
import Cards from '../components/card/Cards'
import '../components/card/Card.scss'
import Footer from '../components/footer/Footer'

export default function Product() {
  const [info, setInfo] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const [data, setData] = useState([])

  async function fetchData() {
    let res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).catch((error) => setError(error)).finally(() => setLoading(false))
    let data = await res?.data
    setInfo(data)
    let resCategory = await axios.get(`https://api.escuelajs.co/api/v1/categories/${data.category.id}/products`).catch((error) => setError(error)).finally(() => setLoading(false))
    let dataCategory = await resCategory?.data
    setData(dataCategory)
  }

  useEffect(() => {
    setLoading(true)
    return () => {
      fetchData()
    }
  }, [])


  return (
    <>
      <Header />
      <main>
        <div className="container">
          {error && <pre>{error.toString()}</pre>}
          {loading ? <div className='loader'></div> : (
            <>
              <Card title={info?.title} description={info?.description} price={info?.price} id={info?.id} img1={info?.images[0]} img2={info?.images[1]} img3={info?.images[2]} />
              <div className="cards">
                {data.map((i) => (
                  <Cards key={i?.id} title={i?.title} price={i?.price} id={i?.id} img1={i?.images[0]} img2={i?.images[1]} img3={i?.images[2]} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}