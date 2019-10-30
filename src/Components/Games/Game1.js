import React from 'react'
import Unity, {UnityContent} from 'react-unity-webgl'

export default function Game1() {

    const unityContent = new UnityContent (
        'TaskForce1/Build/TaskForce1.json',
        'TaskForce1/Build/UnityLoader.js'
    )

    return (
        <div>
            <Unity unityContent={unityContent}/>
        </div>
    )
}
