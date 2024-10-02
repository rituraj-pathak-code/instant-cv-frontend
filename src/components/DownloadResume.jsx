import Button from "../components/Button"

const DownloadResume = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-xl font-bold">Your Job Ready Resume us Ready!</h2>
        <div>
            <Button category="success" size="large">DOWNLOAD</Button>
        </div>
    </div>
  )
}

export default DownloadResume