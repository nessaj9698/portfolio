import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTab, setTab } from '../../../../redux/reducers/mainReducer';




export const StyledSubMenu = styled.div`
& {
    height:42px;
    display:flex;
    align-items:center;
    width:100%;
    border-bottom:1px solid #1E2D3D;
    grid-area:tabs;
        .currentTab {
            background-color:#000a12;
        }
        div {
            cursor:grab;
            padding-left:15px;
            
            border-right:1px solid #1E2D3D;
            height:100%;
            display:flex;
            align-items:center;
            min-width:210px;
            color:#607B96;
            position:relative;
                .filter {
                    margin-right:20px;
                    color:inherit;
                }
                .close-tab {
                    position:absolute;
                    right:20px;
                    z-index:999;
                    cursor:pointer;
                }
        }
    
}
`






function SubMenu() {
    const openedPages = useSelector(state => state.main.openedTabs);
    const activeTab = useSelector(state => state.main.activeTab)
    const dispatch = useDispatch()

    const deletingTab = (index) => {
        dispatch(deleteTab(index))
    }

    const [draggedTab, setDraggedTab] = useState(null)
    const [tabList, setTabList] = useState(openedPages)

    useEffect(() => {
        setTabList(openedPages)
    }, [openedPages])

    function dragStartHandler(e, item) {
        setDraggedTab(item)
        console.log(draggedTab)
    }

    function dragEndHandler(e) {

    }

    function dragOverHandler(e) {
        e.preventDefault()

    }

    function dropHandler(e, tab) {
        e.preventDefault()
        setTabList(tabList.map(item => {
            if (item.id === tab.id) {
                return { ...item, order: draggedTab.order }
            }
            if (item.id === draggedTab.id) {
                return { ...item, order: tab.order }
            }
            return item;
        }))
    }

    function sortTabs(a, b) {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }
    let copyList = [...tabList]
    return (
        <StyledSubMenu>
            {copyList.sort(sortTabs)
                .map((tab, index) =>
                    <div
                        className={activeTab === tab.pageName ? 'currentTab' : false}
                        draggable={true}
                        onDragStart={(event) => { dragStartHandler(event, tab) }}
                        onDragLeave={(event) => { dragEndHandler(event) }}
                        onDragEnd={(event) => { dragEndHandler(event) }}
                        onDragOver={(event) => { dragOverHandler(event) }}
                        onDrop={(event) => { dropHandler(event, tab) }}
                    >
                        <div
                            onClick={() => { dispatch(setTab(tab.pageName)) }}>
                            {tab.pageName}
                        </div>
                        <span
                            className='close-tab'
                            onClick={() => { deletingTab(index) }}>x</span>
                    </div>
                )}
        </StyledSubMenu>
    )
}

export default SubMenu