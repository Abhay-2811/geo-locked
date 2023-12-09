import { Spinner } from '@nextui-org/spinner'
export default function Loading (props) {
  return (
    <div className='flex flex-col items-center mt-[200px] w-screen'>
      <Spinner
        label={props.text || 'Loading ...'}
        color='secondary'
        labelColor='secondary'
        size='lg'
      />
    </div>
  )
}
