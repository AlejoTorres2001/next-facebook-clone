import Image from 'next/image'
const SideBarRow = ({src,Icon,title}) => {
    return (
        <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
            {src &&(
                <Image
                    src={src}
                    alt="Profile"
                    width={30}
                    height={30}
                    layout='fixed'
                    className='rounded-full mr-2'
                ></Image>
            )}
            {Icon &&(
                <Icon className="h-8 W-8 text-blue-500"></Icon>
            )}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    )
}

export default SideBarRow
