import React from 'react'
import { useSelector } from 'react-redux';
import { player } from '../slice/playerSlice';
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router';
import RadarChart from '../components/RadarChart';

function Player() {

    const playerData = (useSelector(player))
    const history = useHistory()
    const labelStyle='mt-2 mb-2 font-raleway-500 text-gray'
    const ValueStyle='font-raleway-700 ml-3'


    window.onload = function () {
        window.location = "/";
      }
      

    const backToHome = () => {
        history.push('/')
    }

    return (
        <div className='w-full h-full bg-gray_lite '>

            <div className='md:flex md:justify-between flex-wrap items-center pt-6'>
                <div className='flex items-center md:ml-24 ml-3 cursor-pointer' onClick={backToHome}>
                    <ArrowLeftIcon className='h-4 w-4 text-gray text-base' />
                    <p className='text-base font-semibold ml-3 text-gray'>Home</p>
                </div>
                <div className='flex items-baseline justify-center'>
                    <h1 className='text-gray text-5xl font-normal font-raleway-100 mr-3'>{playerData.name}</h1>
                    <div className='flex'>
                        <img className='w-16' src={playerData.profile_img} alt="" />
                        <img className='w-7 md:top-16 top-20 ml-10 absolute' src={playerData.club_img} alt="" />
                    </div>
                </div>
                <div></div>
            </div>
            <div className='flex flex-col-reverse md:grid md:grid-cols-2 w-full h-full pt-24 place-items-center md:pb-20 px-3'>
                <div className='w-full h-full flex justify-center items-center px-5 pt-10 mt-10 mb-10 md:mb-0 md:pt-0 border-t md:border-none border-gray md:mt-0'>
                    <RadarChart />
                </div>
                <div className='w-full h-full pl-5 md:pl-8 md:border-l border-gray'>
                    <div className='flex'>
                        <div className='bg-green justify-center py-2 px-3 flex items-center rounded-lg mr-3 lg:mr-6'>
                            <h5 className='font-raleway-500 text-lg text-white'>Value {playerData.value}K</h5>
                        </div>
                        <div className='bg-green justify-center py-2 px-3 flex items-center rounded-lg ml-3 lg:ml-6'>
                            <h5 className='font-raleway-500 text-lg text-white'>Wage {playerData.wage}M</h5>
                        </div>
                    </div>
                    <div className='mt-4'>
                    <h4 className={`${labelStyle}`}>Club <span className={`${ValueStyle}`}>{playerData.club}</span></h4>
                    <h4 className={`${labelStyle}`}>Nationality <span className={`${ValueStyle}`}>{playerData.nationality}</span></h4>
                        <h4 className={`${labelStyle}`}>Jersey Number <span className={`${ValueStyle}`}>{playerData.jersey_no}</span></h4>
                        <h4 className={`${labelStyle}`}>Joined <span className={`${ValueStyle}`}>{playerData.joined}</span></h4>
                        <h4 className={`${labelStyle}`}>Contract Valid <span className={`${ValueStyle}`}>{playerData.valid}</span></h4>
                        <h4 className={`${labelStyle}`}>Age <span className={`${ValueStyle}`}>{playerData.age}</span></h4>
                        {<h4 className={`${labelStyle}`}>Weight <span className={`${ValueStyle}`}>{`${playerData.weight}lbs - ${Math.trunc(playerData.weight * 0.453592)}KG`}</span></h4>}
                        <h4 className={`${labelStyle}`}>Height <span className={`${ValueStyle}`}>{playerData.height}</span></h4>
                        <h4 className={`${labelStyle}`}>Position <span className={`${ValueStyle}`}>{playerData.position}</span></h4>
                        <h4 className={`${labelStyle}`}>Preferred Foot <span className={`${ValueStyle}`}>{playerData.preferred_foot}</span></h4>
                        <h4 className={`${labelStyle}`}>{'Work Rate (Attack Defense)'} <span className={`${ValueStyle}`}>{playerData.work_rate}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
