import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <div className="form-control">
      <button type="submit" className="btn btn-primary btn-block">
        {isSubmitting ? (
          <span className="loading loading-spinner">Sending</span>
        ) : (
          text || 'submit'
        )}
      </button>
    </div>
  )
}
export default SubmitBtn
