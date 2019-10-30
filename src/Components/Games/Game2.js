import React from 'react'
import Unity, {UnityContent} from 'react-unity-webgl'

export default function Game2() {

    const unityContent = new UnityContent (
        'TaskForce2/Build/TaskForce2.json',
        'TaskForce2/Build/UnityLoader.js'
    )

    return (
        <div>
            <Unity unityContent={unityContent}/>
        </div>
    )
}
