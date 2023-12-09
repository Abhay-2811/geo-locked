import { Spinner } from '@nextui-org/spinner'
export default function Loading (props) {
  return (
    <div className='flex items-center mx-[48%] mt-[200px] w-screen'>
      <Spinner
        label={props.text || 'Loading ...'}
        color='primary'
        labelColor='primary'
      />
    </div>
  )
}
