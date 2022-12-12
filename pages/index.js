import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>capture</title>
      </Head>
      <div className='home'>
        <div className='store-details'>
          <input type="text" placeholder='name' />
          <input type="email" placeholder='email' />
          <input type="number" placeholder='phone number' />
          <input type="date" placeholder='date' />
          <input type="text" placeholder='event type' />
          <div className='package'>
            <span>choose your package</span>
            <div className='package-type'>
              <input type="checkbox" id="pk1" name="pk1" value="12000" />
              <label for="pk1">traditional photography - 12K</label>
            </div>
            <div className='package-type'>
              <input type="checkbox" id="pk2" name="pk2" value="20000" />
              <label for="pk2">traditional videography - 20K</label>
            </div>
            <div className='package-type'>
              <input type="checkbox" id="pk3" name="pk3" value="18000" />
              <label for="pk3">candid photography - 18K</label>
            </div>
            <div className='package-type'>
              <input type="checkbox" id="pk4" name="pk4" value="25000" />
              <label for="pk4">candid videography - 25K</label>
            </div>
            <div className='package-type'>
              <input type="checkbox" id="pk5" name="pk5" value="10000" />
              <label for="pk5">drone - 10K{"(1hr)"}</label>
            </div>
            <div className='package-type'>
              <input type="checkbox" id="pk6" name="pk6" value="30000" />
              <label for="pk6">LED Screen - 30K{"(4hr)"}</label>
            </div>
          </div>
          <label>album sheets</label>
          <input type="number" placeholder='20-60' />
          <div className='gift'>
            <div className='gift-type'>
              <input type="checkbox" id="g1" name="g1" value="500" />
              <label for="g1">T-shirt - 500</label>
            </div>
            <div className='gift-type'>
              <input type="checkbox" id="g2" name="g2" value="300" />
              <label for="g2">cap - 300</label>
            </div>
            <div className='gift-type'>
              <input type="checkbox" id="g3" name="g3" value="150" />
              <label for="g3">Tea cup - 150</label>
            </div>
            <div className='gift-type'>
              <input type="checkbox" id="g4" name="g4" value="800" />
              <label for="g4">photo frame 12x18 - 800</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
