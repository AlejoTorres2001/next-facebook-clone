import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

const Feed = () => {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40  scrollbar-hide ">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                {/* Stories */}
                <Stories></Stories>
                {/* InputBox */}
                <InputBox></InputBox>
                {/* Posts */}
                <Posts></Posts>
            </div>
        </div>
    )
}

export default Feed
