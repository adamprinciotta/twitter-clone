import { useSession } from 'next-auth/react'
import { Button } from './Button'
import { ProfileImage } from './ProfileImage'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { text } from 'stream/consumers'

function updateTextAreaSize(textArea?:HTMLTextAreaElement){
    if(textArea == null) return
    textArea.style.height = "0"
    textArea.style.height = `${textArea.scrollHeight}px`
}


export function NewTweetForm() {
    //The commented out lines will not let you see the create tweet form unless you are logged in
        //need to set up laptop to be able to log in so I can test here
    
        // const session = useSession()

    // if (session.status !== 'authenticated') return null

    return <Form />
}


function Form(){

    
const [inputValue, setInputValue] = useState('')

// const session = useSession()
    
// if (session.status !== 'authenticated') return null

const textAreaRef = useRef<HTMLTextAreaElement>()

const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea)
    textAreaRef.current = textArea
}, [])

useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current)
}, [inputValue])


return <form className="flex flex-col gap-2 border-b px-4 py-2">
    <div className="flex gap-4">
        {/* <ProfileImage src={session.data.user.image}/> */}
        <textarea 
        ref={inputRef}
        style={{height:0}}
        className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
        placeholder="What's happening?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
    </div>
    <Button className='self-end'>
        Send Tweet
    </Button>
</form>
}
