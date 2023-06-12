import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className=" border-t border-accent-2 bg-black footer">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-lg font-bold tracking-tighter leading-tight text-center lg:text-left mb-0 lg:pr-4 lg:w-1/2">
            LE CERTIFICAZIONI
          </h3>
          <div className="flex flex-wrap content__certificazioni p-4">
            <div className="w-1/4 flex flex-col items-center justify-center px-4">
              <img
                src="https://www.dicasapucci.com/wp-content/uploads/2023/05/logo-hi@2x.png"
                alt="certificazione 1"
              />
              <p className="font-thin py-3 text-center text-xs h-20 !mb-0">
                Associazione Italiana Amatori Dobermann
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-center px-4">
              <img
                src="https://www.dicasapucci.com/wp-content/uploads/2023/05/DicasaPucci_IDC_Logo@2x@2x.png"
                alt="certificazione 1"
              />
              <p className="font-thin py-3 text-center text-xs h-20 !mb-0">
                Internationaler Dobermann Club
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-center px-4">
              <img
                src="https://www.dicasapucci.com/wp-content/uploads/2023/05/DicasaPucci_FCI_Logo@2x@2x.png"
                alt="certificazione 1"
              />
              <p className="font-thin py-3 text-center text-xs h-20  !mb-0">
                Federation Cynologique Internationale
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-center px-4">
              <img
                src="https://www.dicasapucci.com/wp-content/uploads/2023/05/DicasaPucci_ENCI_Logo@2x@2x.png"
                alt="certificazione 1"
              />
              <p className="font-thin py-3 text-center text-xs h-20  !mb-0">
                Ente Nazionale Cinofilia Italiana
              </p>
            </div>
          </div>
          <div className="w-100 flex flex-col items-center justify-center mt-10">
            <div className="flex justify-around mb-6">
              <p className="pr-2 text-right">Face</p>
              <p className="pl-2 text-left">Insta</p>
            </div>
            <p className="font-bold m-0 p-0 text-center !mb-0">Di Casa Pucci</p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              P.Iva: 01598700498
            </p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              Via Ferrara, 138 - 55054 Stiava (LU)
            </p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              +39 348 43 95 808
            </p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              info@dicasapucci.com
            </p>
            <p className="font-thin mt-2 p-0 text-center !mb-0">
              © Copyright 2023
            </p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              Privacy & Cookie Policy
            </p>
            <p className="font-thin mt-2 p-0 text-center !mb-0">
              Credits: xdesigners.it
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
