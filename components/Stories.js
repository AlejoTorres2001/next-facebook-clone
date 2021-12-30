import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        id: 1,
        profile: 'https://picsum.photos/id/1/200/200',
        name: 'John Doe',

    },
    {
        id: 2,
        profile: 'https://picsum.photos/id/2/200/200',
        name: 'Jane Doe',

    },
    {
        id: 3,
        profile: 'https://picsum.photos/id/3/200/200',
        name: 'Jack Doe',

    },
    {
        id: 4,
        profile: 'https://picsum.photos/id/4/200/200',
        name: 'Jill Doe',
    }
]

const Stories = () => {
    return (
        <div className='flex justify-center space-x-3 mx-auto '>
            {stories.map(story => (
                <StoryCard key={story.id} profile={story.profile} src={story.profile} name={story.name}></StoryCard>
            ))}
            
        </div>
    )
}

export default Stories
