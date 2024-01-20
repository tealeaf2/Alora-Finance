import React, {useEffect, useState} from 'react'
import sprout from '../images/Sprout.png';
import money_tree from'../images/Money_Tree.png';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { listTreeName, updateTreeName } from '../actions/treeActions';

 const NameInputButton = ()  => {
    const [render, setRender] = useState(true)
    const [tempName, setTempName] = useState('')
    const dispatch = useDispatch()

    const treeName = useSelector(state => state.treeName)
    const {error, loading, treeNameGet} = treeName

    const name = treeNameGet.name

    useEffect(() => {
        dispatch(listTreeName(1))
    }, [dispatch])

    const handleName = (e) => {
        setTempName(e.target.value)
    }

    //Async function to not have so many renders
    useEffect(() => {
        // If the tree name already exists, then sets render state to false
        const handleRenderChange = () => {
            if(name !== null) setRender(false)
        }

        handleRenderChange()
    }, [name])

    // If the tree name already exists for the unit, renders the name, otherwise, renders the input box
    return (
    <>
        {render ? (
            <form>
                <label>Enter your name: </label>
                <input type="text"
                    name="tname"
                    placeholder="Your name"
                    value={tempName}
                    onChange={handleName}
                />
                    <button type='button'
                        onClick={() => {
                            if (tempName !== '') {
                                dispatch(updateTreeName(1, { 'name': tempName })).then(() => {
                                    dispatch(listTreeName(1))
                                })
                            }
                        }}
                    > 
                Submit 
                </button>
            </form>  ) 
            : 
            (
                <div>
                    {name}
                </div>
            )
        } 
    </>
    )
}

const treeProgress = ({isActive}) => {
    return (
        <div
        className={`${
            isActive ? 'block' : 'hidden'
        }`}
        >
            <div className="h-screen">
                <img src={money_tree} alt=""/>
                        
                <NameInputButton/>
                <img src={sprout} alt=""/>
            </div>
        </div>
    );
}

export default treeProgress