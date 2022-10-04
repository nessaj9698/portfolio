import React, { useEffect, useRef, useState } from 'react'
import background from '../../assets/img/Background.png'
import arrow from '../../assets/img/arrow.svg'
import food from '../../assets/img/snake-food.svg'
import styled from 'styled-components'
import useInterval from './hooks/useInterval'


const StyledSnake = styled.div`
 & {
    background: var(--snake-bg);
    padding:35px 30px;
     width:510px;
     height: 475px;
     display:flex;
     column-gap:15px;
     border-radius:10px;
        :focus {
                outline:none;
        }
        canvas {
            background-color:#011627D6;
        }
        #food {
            display:none;
        }
        .play-button {
            background-color:#FEA55F;
            padding:10px 15px;
            border:none;
            border-radius:8px;
            cursor:pointer;
            color:black;
            align-self:end;
            outline:none;
        }
        .snake-info {
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            align-items:baseline;
            color:var(--colors-headings);
        }
        .keyboard {
            width:200px;
            border-radius:8px;
            row-gap:20px;
            text-align:center;
            background-color:rgba(1, 20, 35, 0.19);
            padding:15px;
            margin-bottom:20px;
            color:var(--colors-headings);
            .top {
                width:100%;
                display:flex;
                justify-content:center;
                margin-bottom:5px;
                margin-top:15px;
                .keyUp {
                  
                }
            }
            .bottom {
                display:flex;
                justify-content:space-between;
                .left {

                }
            }
        }
 }
 .key {
     background-color:#1E2D3D;
     border-radius:8px;
    width:50px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    .left {
        transform:rotate(270deg);
    }
    .down {
        transform:rotate(180deg);
    }
    .right {
        transform:rotate(90deg);
    }
 }
`

const canvasX = 235
const canvasY = 400
const initialSnake = [[5, 23], [5, 23]]
const initialApple = [5, 5]
const scale = 12
const timeDelay = 100



function SnakeGame() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [snake, setSnake] = useState(initialSnake);
    const [apple, setApple] = useState<any>(initialApple);
    const [direction, setDirection] = useState([0, -1]);
    const [delay, setDelay] = useState<number | null>(null)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)

    function handleSetScore() {
        if (score > Number(localStorage.getItem("snakeScore"))) {
            localStorage.setItem("snakeScore", JSON.stringify(score))
        }
    }



    function changeDirection(e: any) {

        switch (e.key) {
            case "ArrowLeft":
                setDirection([-1, 0])
                break
            case "ArrowRight":
                setDirection([1, 0])
                break
            case "ArrowUp":
                setDirection([0, -1])
                break
            case "ArrowDown":
                setDirection([0, 1])
                break
        }
    }

    function foodAte(newSnake: number[][]) {
        let coord = apple.map(() => Math.floor(Math.random() * canvasX / scale))
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
            let newApple = coord
            setScore(score + 1)
            setApple(newApple)
            return true
        }
        return false
    }
    function isCrash(head: number[]) {
        for (let i = 0; i < head.length; i++) {
            if (head[i] < 0 || head[0] * scale >= canvasX || head[1] * scale >= canvasY) return true
        }
        for (const s of snake) {
            if (head[0] === s[0] && head[1] === s[1]) return true
        }
        return false
    }

    function startGame() {
        const newSnake = [...snake]
        const newSnakeHead = [newSnake[0][0] + direction[0], newSnake[0][1] + direction[1]]
        newSnake.unshift(newSnakeHead)
        if (isCrash(newSnakeHead)) {
            setDelay(null);
            setGameOver(true)
            handleSetScore()
        }
        if (!foodAte(newSnake)) {
            newSnake.pop()
        }
        setSnake(newSnake)
    }

    useInterval(() => {
        startGame();
    }, delay)

    useEffect(() => {
        let food = document.getElementById('food') as HTMLCanvasElement
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')

            if (ctx) {
                ctx.setTransform(scale, 0, 0, scale, 0, 0)
                ctx.fillStyle = '#efefef';
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                ctx.fillStyle = '#43D9AD';
                snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1))

                ctx.drawImage(food, apple[0], apple[1], 1, 1)
            }
        }
    }, [snake, apple, gameOver])

    function play() {
        setSnake(initialSnake);
        setApple(initialApple);
        setDirection([0, -1]);
        setDelay(timeDelay);
        setScore(0)
        setGameOver(false)
    }

    return (
        <StyledSnake onKeyDown={(e) => changeDirection(e)}
            tabIndex={0}
        >
            <img src={food} id='food' />

            <canvas className='snake-canvas'
                ref={canvasRef}
                width={`${canvasX}px`}
                height={`${canvasY}px`}
                onKeyDown={(e) => {
                    changeDirection(e)
                }}
            ></canvas>
            <div className="snake-info">
                <div className="keyboard">
                    Используйте клавиатуру для управления
                    <div className="top">
                        <div className="key" >
                            <img src={arrow} alt="" className='up'/>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="key">
                            <img src={arrow} alt="" className='left'/>
                        </div>
                        <div className="key" >
                            <img src={arrow} alt="" className='down'/>
                        </div>
                        <div className="key">
                            <img src={arrow} alt="" className='right'/>
                        </div>
                    </div>
                </div>
                Всего очков:{score}
                {gameOver && <div>Game over</div>}
                <button onClick={play} className="play-button">Начать игру</button>
            </div>

        </StyledSnake>
    )
}

export default SnakeGame