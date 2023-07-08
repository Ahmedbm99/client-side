import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FacebookLogo,LinkedinLogo   } from "phosphor-react";
export const Footer =() => {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        
        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Inscrire pour nous suivres</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Inscrire
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          laboratoire de recherche LETI de l´école Nationale d´Ingénieur de Sfax ENIS.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contactez nous</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  <FacebookLogo size={25} /> Facebook
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  <LinkedinLogo size={25} />  Linkedin
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>à propres nous</h5>
              <li>
                  <a href='/client-side/src/pages/ContactUs' className='text-white'>
                    à propres nous
                  </a>
                </li>
             
            </MDBCol>
         </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
       
      </div>
    </MDBFooter>
  );
}