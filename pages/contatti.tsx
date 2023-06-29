import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { sendMail, getContacts, client } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import Button from '../components/button'
import AnimateSection from '../components/animateSection'

const SEND_MAIL = gql`
  mutation SendEmail($input: SendEmailInput!) {
    sendEmail(input: $input) {
      message
      origin
      sent
    }
  }
`

export default function Contacts({ data, preview }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    client
      .mutate({
        mutation: SEND_MAIL,
        variables: {
          input: {
            clientMutationId: 'contact',
            from: email,
            to: 'info@dicasapucci.com',
            body: message,
            subject: 'Mail from website',
          },
        },
      })
      .then(res => {
        alert('Messaggio inviato')
      })
      .catch(err => {
        alert('Errore')
      })
  }
  return (
    <Layout preview={false}>
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line">
            <div>
              <label className="label">Nome e Cognome</label>
              <input
                className="input"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label">email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label">telefono</label>
              <input
                className="input"
                type="text"
                value={tel}
                onChange={e => setTel(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Your message</label>
              <textarea
                className="textarea"
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleSubmit}>
              Invia
            </button>
          </div>
          <div className="section__content">
            <div className="section__content__wrapper-line">
              <div className="contact_info">
                <p className="font-bold">Di Casa Pucci</p>
                <p>P.Iva: 01598700498</p>
                <p>Via Ferrara, 138 - 55054 Stiava (LU)</p>
                <p>+39 348 43 95 808 </p>
                <p>info@dicasapucci.com</p>
              </div>
            </div>
          </div>
          <div className="section__content">
            <div className="container_maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.3062937800123!2d10.314571176787597!3d43.890922637022335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d59ef75cca759f%3A0x7ccda47bf9328a8b!2sAllevamento%20Dobermann%20Di%20Casa%20Pucci!5e0!3m2!1sit!2sit!4v1687939388215!5m2!1sit!2sit"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="section__content my-20">
            <div className="section__content__wrapper-line text-center">
              <Button link="/" type="secondary">
                Torna alla home
              </Button>
            </div>
          </div>
        </AnimateSection>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getContacts(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
