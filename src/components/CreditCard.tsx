import { useEffect, useState, type SetStateAction } from 'react';

interface Props {
  SubproductoNombre: string;
  backgroundColor: string;
  textColor: string;
  logoColor: string;
  logoCordobesa: string;
  id: string;
  SubproductoId: string;
  Marca: string
}

const CreditCardReact = (props: Props) => {
  const [data, setData] = useState({
    Producto: {
      Id: props.id || '',
      SubproductoId: props.SubproductoId || '',
      SubproductoNombre: props.SubproductoNombre || '',
      Marca: props.Marca || '',
    },
    Estilos: {
      Background: props.backgroundColor || '',
      Font: props.textColor || '',
      Isologo: props.logoColor || '',
      logoCordobesa: props.logoCordobesa || '',
    }
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<SetStateAction<{
        Producto: { Id: string; SubproductoId: string; SubproductoNombre: string; Marca: string; };
        Estilos: { Background: string; Font: string; Isologo: string; logoCordobesa: string; };
      }>>;
      setData(customEvent.detail);
    };

    window.addEventListener('update-card', handler as EventListener);
    return () => window.removeEventListener('update-card', handler as EventListener);
  }, []);

  const { Producto, Estilos } = data;

  return (
    <>
      <div
        className="credit-card aspect-[1.586/1] max-w-sm p-6 rounded-xl shadow-md relative transition-all mx-auto overflow-hidden"
        style={{
          backgroundColor: Estilos.Background,
          color: Estilos.Font
        }}
      >

        <div
          className="w-64 rounded-full absolute -top-10 -right-10 z-0"
        >
          <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full h-full' style={{ color: Estilos.Isologo }}>
            <g clip-path="url(#clip0_2425_230)">
              <path d="M20.8649 12.7693C18.9968 11.8253 16.9249 11.3491 14.8294 11.3821C12.7346 11.3497 10.6635 11.8259 8.7959 12.7693C7.05171 13.65 5.59191 15.0003 4.58324 16.6662C3.57457 18.332 3.0577 20.2462 3.09166 22.19C3.05636 24.1337 3.57271 26.0478 4.58156 27.7133C5.59042 29.3788 7.05098 30.7282 8.7959 31.6069C10.6617 32.5558 12.7337 33.0342 14.8294 33C17.0719 33 19.0838 32.5356 20.8649 31.6069C22.6106 30.7291 24.0718 29.3799 25.0808 27.7142C26.0898 26.0485 26.6056 24.1339 26.5692 22.19C26.6043 20.246 26.0879 18.3313 25.0791 16.6653C24.0703 14.9992 22.6099 13.649 20.8649 12.7693ZM18.8715 24.9175C18.4895 25.6591 17.9097 26.282 17.1955 26.7182C16.6621 27.0418 16.0672 27.2524 15.448 27.3368C14.8289 27.4211 14.1989 27.3773 13.5975 27.2083C12.9962 27.0392 12.4365 26.7484 11.9536 26.3542C11.4707 25.96 11.075 25.4709 10.7913 24.9175C10.3544 24.0697 10.1381 23.1266 10.1623 22.1744C10.1396 21.2267 10.3558 20.2884 10.7913 19.4449C11.0811 18.8974 11.4799 18.4141 11.9634 18.0244C12.447 17.6348 13.0052 17.3469 13.6042 17.1783C14.2032 17.0097 14.8305 16.9639 15.4478 17.0436C16.0652 17.1234 16.6598 17.3271 17.1955 17.6423C17.9106 18.0783 18.4906 18.7021 18.8715 19.4449C19.305 20.289 19.5198 21.2271 19.4965 22.1744C19.5209 23.1262 19.3061 24.069 18.8715 24.9175Z" fill="currentColor" />
              <path d="M25.1811 10.4377L30 6.15248C26.0269 2.05932 20.5909 0 15.0463 0C9.49403 0.00237779 4.13732 2.03789 0 5.71749L4.47387 10.3377C10.5863 4.90631 19.8692 4.95137 25.1771 10.4377" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_2425_230">
                <rect width="30" height="33" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className='relative z-10'>
          <h2 className="font-bold mb-2">
            <span className='bg-[#CBED94] text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm'>
              {Producto.Id}{Producto.SubproductoId}
            </span>
            {Producto.SubproductoNombre}</h2>



          <div className='grid grid-cols-2 grid-rows-2 gap-4 mb-4'>
            <div className="flex flex-col">
              <span className="text-sm opacity-50">Background Color</span>
              <span className="text-md font-medium">
                {Estilos.Background}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm opacity-50">Iso Color</span>
              <span className="text-md font-medium">
                {Estilos.Isologo}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm opacity-50">Font Color</span>
              <span className="text-md font-medium">
                {Estilos.Font}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm opacity-50">Logo cordobesa</span>
              <span className="text-md font-medium">
                {Estilos.logoCordobesa}
              </span>
            </div>

            <div>
              <span className="text-sm opacity-50">Marca</span>
              <span className="text-md font-medium">
                {Producto.Marca}
              </span>
            </div>

          </div>
        </div>
      </div>
    </>

  );
};

export default CreditCardReact;
