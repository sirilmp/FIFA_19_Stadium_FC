import React, { useEffect, useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { set_player } from '../slice/playerSlice'

function Home() {

    const [searchTerm, setSearchTerm] = useState('')
    const [players, setPlayers] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    const height = window.innerHeight - 250
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        const playersData = async () => {
            const request = await axios.get('https://run.mocky.io/v3/cdf942c2-b5cb-432c-93cb-fd582dab5126').then((res) => {
                setPlayers(res.data)
                console.log(res.data);
                setLoading(false)
            }).catch((error) => {
                // alert("Something want wrong pleas try again !")
                setLoading(false)
            })
            return request

        }
        playersData()

        return () => {
            playersData()
        }
    }, [])

    useEffect(() => {
        if (searchTerm === '') {

            setSearchResults([])

        } else if (searchTerm !== '') {

            const newPlayers = players.filter((player) => {
                return Object.values(player.name + player.nationality + player.jersey_no.toString() + player.club).join("").toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase().trim())
            })
            setSearchResults(newPlayers)


        } else {

            setSearchResults([])

        }

    }, [searchTerm, players])

    const NavigateToPlayer = (player) => {

        dispatch(set_player({
            player: player
        }))
        history.push('/player')
    }

    return (
        <>
            {
                loading ? <>
                    <div className='w-screen h-screen  bg-no-repeat flex justify-center items-center bg-primary'>
                        <img className='w-1/2 h-1/2 animate-pulse' src="../assets/images/football.svg" alt="" />
                    </div>
                </> : <div className='w-full h-full bg-primary'>
                    <div className='lg:grid lg:grid-cols-2 '>
                        <div className='w-screen h-screen bg-no-repeat hidden lg:block' style={{ backgroundImage: "url(../assets/images/bg.png)" }}></div>
                        <div className='flex flex-col items-center pt-32 h-full'>
                            <div className='flex flex-col items-center max-w-lg h-full'>
                                <img className='w-40 h-16 mb-6' src="../assets/images/logo.png" alt="" />
                                <div className='shadow-lg flex rounded-md mx-4'>
                                    <input className='md:w-96 w-44 sm:w-64 h-10  rounded-tl-md rounded-bl-md bg-white px-3 placeholder-black font-semibold font-raleway-500 focus:outline-none' type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toString())} />
                                    <div className='bg-primary px-5 flex items-center rounded-tr-md rounded-br-md cursor-pointer'>
                                        <SearchIcon className='h-5 w-5 text-white text-base' />
                                        <p className='ml-2 text-white text-base font-medium font-raleway-500 select-none'>Search</p>
                                    </div>
                                </div>
                                {
                                    searchResults.length === 0 && searchTerm !== '' ? <div className='mt-1 ml-1 self-start max-w-lg'>
                                        <h1 className='py-2 px-5 bg-white shadow-md rounded-md font-semibold text-black'>Not found !</h1>
                                    </div> : searchResults.map((player) => (
                                        // Name as the key is not best.
                                        <div key={player.name} className='mt-1 ml-1 self-start max-w-lg' onClick={() => NavigateToPlayer(player)} >
                                            <h1 className='py-2 px-5 bg-white shadow-md rounded-md font-semibold cursor-pointer hover:bg-gray_lite duration-200 text-black'>{player.name}</h1>
                                        </div>
                                    ))

                                }
                            </div>

                        </div>
                        <div className='w-full bg-no-repeat lg:hidden' style={{ backgroundImage: "url(../assets/images/bg.png)", height: height }}></div>
                    </div>
                </div>
            }
        </>
    )
}

export default Home




// [
//     {
//         "name":"L. Messi",
//         "age":"31",
//         "nationality":"Argentina",
//         "overall":94,
//         "club":"FC Barcelona",
//         "value":"~110.5M",
//         "wage":"~565K",
//         "preferred_foot":"Left",
//         "work_rate":"Medium/Medium",
//         "position":"RF",
//         "jersey_no":10,
//         "joined":"1-Jul-2004",
//         "valid":2021,
//         "height":"5'7",
//         "weight":159,
//         "crossing":84,
//         "finishing":95,
//         "heading_acc":70,
//         "short_pass":90,
//         "volleys":86,
//     "profile_img":"https://fifastatic.fifaindex.com/FIFA19/images/players/5/158023.png",
//     "club_img":"https://fifastatic.fifaindex.com/FIFA19/images/crest/3/dark/241.png"
//         },
//     {
//         "name":"Cristiano Ronaldo",
//         "age":"33",
//         "nationality":"Portugal",
//         "overall":94,
//         "club":"Juventus",
//         "value":"~77M",
//         "wage":"~405K",
//         "preferred_foot":"Right",
//         "work_rate":"High/Low",
//         "position":"ST",
//         "jersey_no":7,
//         "joined":"10-Jul-2018",
//         "valid":2022,
//         "height":"6'2",
//         "weight":183,
//         "crossing":84,
//         "finishing":94,
//         "heading_acc":89,
//         "short_pass":81,
//         "volleys":87,
//     "profile_img":"https://fifastatic.fifaindex.com/FIFA19/images/players/5/20801.png",
//     "club_img":"https://fifastatic.fifaindex.com/FIFA19/images/crest/10/light/45.png"
//         },{
//         "name":"Neymar Jr",
//         "age":"33",
//         "nationality":"Brazil",
//         "overall":94,
//         "club":"Paris Saint-Germain",
//         "value":"~118.5M",
//         "wage":"~290K",
//         "preferred_foot":"Right",
//         "work_rate":"High/Medium",
//         "position":"LW",
//         "jersey_no":10,
//         "joined":"03-Aug-2017",
//         "valid":2022,
//         "height":"5'9",
//         "weight":150,
//         "crossing":79,
//         "finishing":87,
//         "heading_acc":62,
//         "short_pass":84,
//         "volleys":84,
//     "profile_img":"https://fifastatic.fifaindex.com/FIFA19/images/players/5/190871.png",
//     "club_img":"https://fifastatic.fifaindex.com/FIFA19/images/crest/10/light/73.png"
//         },{
//         "name":"De Gea",
//         "age":27,
//         "nationality":"Spain",
//         "overall":91,
//         "club":"Manchester United",
//         "value":"~72M",
//         "wage":"~260K",
//         "preferred_foot":"Right",
//         "work_rate":"Medium/Medium",
//         "position":"GK",
//         "jersey_no":1,
//         "joined":"01-Jul-2011",
//         "valid":2020,
//         "height":"6'4",
//         "weight":168,
//         "crossing":17,
//         "finishing":13,
//         "heading_acc":21,
//         "short_pass":50,
//         "volleys":13,
//     "profile_img":"https://fifastatic.fifaindex.com/FIFA22/players/193080.png",
//     "club_img":"https://fifastatic.fifaindex.com/FIFA22/teams/light/11.png"
//         },{
//         "name":"K. De Bruyne",
//         "age":27,
//         "nationality":"Belgium",
//         "overall":91,
//         "club":"Manchester City",
//         "value":"~102M",
//         "wage":"~355K",
//         "preferred_foot":"Right",
//         "work_rate":"High/High",
//         "position":"RCM",
//         "jersey_no":7,
//         "joined":"30-Aug-2015",
//         "valid":2023,
//         "height":"5'11",
//         "weight":154,
//         "crossing":93,
//         "finishing":82,
//         "heading_acc":55,
//         "short_pass":92,
//         "volleys":82,
//     "profile_img":"https://fifastatic.fifaindex.com/FIFA22/players/192985.png",
//     "club_img":"https://fifastatic.fifaindex.com/FIFA22/teams/light/10.png"
//         }
//     ]