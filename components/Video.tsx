import { VideoProps } from '@/types';
import React from 'react';

const Video = ({ videoSrc, title, subtitle }:VideoProps) => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src={videoSrc} typeof='video' autoPlay muted loop />
            </div>
            <div className="video-content space-y-2 z-10">
                <h1 className="font-light text-6xl">{title}</h1>
                <h3 className="font-light text-3xl">{subtitle}</h3>
            </div>
        </section>
    );
};

export default Video;
