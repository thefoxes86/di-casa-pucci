import { Parallax } from 'react-parallax'

const ParallaxImage = props => {
  return (
    <Parallax
      blur={0}
      bgImage={props.src || ''}
      bgImageAlt={props.alt}
      strength={props.strength ? props.strength : 100}
    >
      <div
        style={{
          height: props.height ? props.height : 200,
        }}
      >
        {props.children}
      </div>
    </Parallax>
  )
}

export default ParallaxImage
