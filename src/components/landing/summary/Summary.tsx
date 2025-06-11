import glass from "@/assets/Glass.png"

const Summary = () => {
    return (
        <div id="summary" className="flex max-lg:flex-col flex-row-reverse justify-center gap-8 max-lg:gap-16 items-center">
            <img src={glass || " "} alt=" " className='size-[300px] rounded-full bg-secondary' />
            <div className='max-w-2xl'>
                <h1 className="text-4xl font-extrabold text-accent mb-4">Hi, I'm a Front-End Developer</h1>
                <p className="text-lg text-gray-200 font-medium mb-2">
                    Passionate about crafting seamless digital experiences with <span className="text-accent font-bold">React</span> & <span className="text-accent font-bold">Next.js</span>.
                </p>
                <p className="text-gray-400 mb-4">
                    With over 2.5 years of hands-on experience, I specialize in building modern, responsive, and user-centric web applications. My focus is on performance, accessibility, and delivering pixel-perfect interfaces that delight users and drive business results.
                </p>
                <p className="text-gray-400">
                    Always eager to learn new technologies, tackle challenging problems, and collaborate with creative teams to turn ideas into reality.
                </p>
            </div>
        </div>
    )
}

export default Summary
