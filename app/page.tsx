'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
  loading: () => <div className="w-8 h-8" />,
});

/* ── Star rating ───────────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginTop: 5 }}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(rating);
        const half = !filled && i - 0.5 <= rating;
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{
              width: 14,
              height: 14,
              color: filled || half ? 'var(--gold)' : 'var(--text-muted)',
              opacity: half ? 0.55 : 1,
            }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
}

/* ── Skill Icons ───────────────────────── */
function getSkillIcon(name: string) {
  switch (name) {
    case 'HTML5':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
          <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
          <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
          <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
        </svg>
      );
    case 'CSS3':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
          <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>
          <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/>
          <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/>
          <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/>
          <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/>
        </svg>
      );
    case 'JavaScript':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
          <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/>
          <path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/>
        </svg>
      );
    case 'React':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <g fill="#61DAFB">
            <circle cx="64" cy="64" r="11.4"/>
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/>
          </g>
        </svg>
      );
    case 'Next.js':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <circle cx="64" cy="64" r="64" fill="#000" />
          <path fill="url(#nextjs-a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"/>
          <path fill="url(#nextjs-b)" d="M81.778 38.4h8.533v51.2h-8.533z"/>
          <defs>
            <linearGradient id="nextjs-a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="nextjs-b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Node.js':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fill="url(#nodejs-a)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"/>
          <path fill="url(#nodejs-b)" d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"/>
          <path fill="url(#nodejs-c)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"/>
          <defs>
            <linearGradient id="nodejs-a" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3F873F"/>
              <stop offset=".33" stopColor="#3F8B3D"/>
              <stop offset=".637" stopColor="#3E9638"/>
              <stop offset=".934" stopColor="#3DA92E"/>
              <stop offset="1" stopColor="#3DAE2B"/>
            </linearGradient>
            <linearGradient id="nodejs-b" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
              <stop offset=".138" stopColor="#3F873F"/>
              <stop offset=".402" stopColor="#52A044"/>
              <stop offset=".713" stopColor="#64B749"/>
              <stop offset=".908" stopColor="#6ABF4B"/>
            </linearGradient>
            <linearGradient id="nodejs-c" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
              <stop offset=".092" stopColor="#6ABF4B"/>
              <stop offset=".287" stopColor="#64B749"/>
              <stop offset=".598" stopColor="#52A044"/>
              <stop offset=".862" stopColor="#3F873F"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'MongoDB':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fillRule="evenodd" clipRule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"/>
          <path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"/>
        </svg>
      );
    case 'Java':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
          <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
          <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
          <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
          <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
        </svg>
      );
    case 'MySQL':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fill="#00618A" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"/>
        </svg>
      );
    case 'Python':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#5A9FD4"/>
            <stop offset="1" stopColor="#306998"/>
          </linearGradient>
          <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#FFD43B"/>
            <stop offset="1" stopColor="#FFE873"/>
          </linearGradient>
          <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
          <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.69-.001-2.6 2.073-4.719 4.633-4.692z" transform="translate(0 10.26)"/>
          <radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"/>
            <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"/>
          </radialGradient>
          <path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
        </svg>
      );
    case 'Figma':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ width: 24, height: 24 }}>
          <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"/>
          <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"/>
          <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"/>
          <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/>
          <path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"/>
        </svg>
      );
    default:
      return null;
  }
}

/* ── Data ──────────────────────────────── */
const skills = [
  { name: 'HTML5', rating: 4.5 },
  { name: 'CSS3', rating: 4.5 },
  { name: 'JavaScript', rating: 4.0 },
  { name: 'TypeScript', rating: 3.5 },
  { name: 'React', rating: 4.0 },
  { name: 'Next.js', rating: 4.0 },
  { name: 'Node.js', rating: 3.5 },
  { name: 'MongoDB', rating: 3.5 },
  { name: 'Java', rating: 4.0 },
  { name: 'MySQL', rating: 3.5 },
  { name: 'Python', rating: 3.5 },
  { name: 'Figma', rating: 3.0 },
];

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
];

const contacts = [
  {
    label: 'GitHub', detail: 'Dasuni-Nawarathna',
    href: 'https://github.com/Dasuni-Nawarathna',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{ width: 20, height: 20, flexShrink: 0 }}><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.547 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.565 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .269.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>,
  },
  {
    label: 'LinkedIn', detail: 'Dasuni-Nawarathna',
    href: 'https://www.linkedin.com/in/dasuni-nawarathna-7243372b2/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>,
  },
  {
    label: 'Email', detail: 'imalshanawa@gmail.com',
    href: 'mailto:imalshanawa@gmail.com',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.964 1.874l-7.5 5.25a2.25 2.25 0 01-2.572 0l-7.5-5.25A2.25 2.25 0 012.25 6.993V6.75" /></svg>,
  },
  {
    label: 'Phone', detail: '+94 70 315 9996',
    href: 'tel:+94703159996',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-2.25a.75.75 0 00-.75.75v.188a12.003 12.003 0 01-8.438-8.438h.188a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 6.75v0z" /></svg>,
  },
];

/* ── Reusable section label ────────────── */
function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
      <span style={{ display: 'block', width: 30, height: 2, background: 'var(--gold)', borderRadius: 2, flexShrink: 0 }} />
      <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
        {text}
      </span>
    </div>
  );
}

const projectsData = [
  {
    title: "MyBizness App",
    category: "Full-Stack Development",
    description: "A business management platform featuring a Next.js frontend and MongoDB Atlas integration for real-time data handling. Dasuni led the UI/UX and integration efforts.",
    tags: ['Next.js', 'MongoDB', 'Tailwind'],
    link: "https://github.com/Ravindu-Hettiarachchi/mybiznezz.git",
    imagePath: "/MyBiznezz.png",
    filterType: "Next.js"
  },
  {
    title: "Tour Ops System",
    category: "System Design",
    description: "A comprehensive management system for tour operations, showcasing structured use case modeling for tourism logistics. Dasuni contributed to the backend and system architecture.",
    tags: ['Java', 'MySQL', 'System Design'],
    link: "https://github.com/Dasuni-Nawarathna/YataraCeylon.git",
    imagePath: "/YataraCeylon.png",
    filterType: "Java"
  },
  {
    title: "SplitDay App",
    category: "PWA & Full-Stack",
    description: "A Progressive Web Application (PWA) group expense splitter. Allows users to create/join trips via invite codes, manage participants, and calculate split balances and payouts in real-time.",
    tags: ['Next.js', 'MongoDB', 'PWA', 'Mongoose'],
    link: "https://github.com/Dasuni-Nawarathna/SplitDay.git",
    imagePath: "/SplitDay.png",
    filterType: "PWA"
  },
  {
    title: "Memory Space",
    category: "PWA & Security",
    description: "A creative digital scrapbooking journal featuring WebAuthn biometric security, client-side encryption (CryptoJS), dynamic Framer Motion sticker canvas, Google Maps, and ambient music player.",
    tags: ['Next.js', 'Supabase', 'Framer Motion', 'PWA'],
    link: "https://github.com/Dasuni-Nawarathna/Journal-Web",
    imagePath: "/MemorySpace.png",
    filterType: "PWA"
  }
];

/* ── Page ──────────────────────────────── */
export default function Home() {
  const [active, setActive] = useState('Home');
  const [projectFilter, setProjectFilter] = useState('All');

  useEffect(() => {
    const handler = () => {
      const sections: Record<string, string> = { about: 'About', work: 'Work', contact: 'Contact' };
      let found = 'Home';
      for (const [id, label] of Object.entries(sections)) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) found = label;
      }
      setActive(found);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <main style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-main)', minHeight: '100vh' }}>

      {/* ════════════════════════════════════
          NAV
      ════════════════════════════════════ */}
      <nav className="liquid-glass-nav" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
            Dasuni<span style={{ color: 'var(--gold)' }}>.</span>
          </div>

          {/* Nav pills */}
          <div style={{ display: 'flex', gap: 8 }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                id={`nav-${label.toLowerCase()}`}
                onClick={() => setActive(label)}
                className="glass-btn"
                style={{
                  padding: '0.5rem 1.3rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  color: active === label ? 'var(--gold)' : 'var(--text-secondary)',
                  borderColor: active === label ? 'var(--gold)' : undefined,
                  background: active === label ? 'rgba(200,145,58,0.12)' : undefined,
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ThemeToggle />
            <a href="#contact" id="nav-cta" className="gold-btn" style={{ padding: '0.55rem 1.4rem', fontSize: '0.85rem', textDecoration: 'none' }}>
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section style={{ display: 'flex', minHeight: '100vh', paddingTop: 68 }}>

        {/* Left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 3rem 4rem 5rem', maxWidth: 640 }}>
          <SectionLabel text="IT Undergraduate & Developer" />

          <h1
            className="heading-tight"
            style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.0 }}
          >
            DASUNI<br />
            <span style={{ color: 'var(--gold)' }}>NAWARATHNA</span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 460 }}>
            A creative full-stack developer specialising in Next.js, Python, and AI multimedia —
            passionate about building premium digital experiences.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#work" id="hero-explore" className="gold-btn" style={{ padding: '0.85rem 2.2rem', fontSize: '0.85rem', textDecoration: 'none' }}>
              Explore Work
            </a>
            <a href="#about" id="hero-about" className="glass-btn" style={{ padding: '0.85rem 2.2rem', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', color: 'var(--text-primary)' }}>
              About Me
            </a>
          </div>
        </div>

        {/* Right — contained portrait */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 5rem 4rem 2rem' }}>
          <img
            src="/dasuni.JPG"
            alt="Dasuni Nawarathna"
            style={{
              width: 360,
              height: 440,
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: 14,
              display: 'block',
              border: '1.5px solid rgba(255,255,255,0.12)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
            }}
          />
        </div>
      </section>

      {/* ════════════════════════════════════
          ABOUT
      ════════════════════════════════════ */}
      <section id="about" style={{ background: 'var(--bg-secondary)', scrollMarginTop: 68 }}>

        {/* Top divider */}
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6rem 2.5rem 7rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '5rem', alignItems: 'start' }}>

            {/* Photo */}
            <div className="about-photo-wrap" style={{ maxWidth: 420 }}>
              <img
                src="/dasuni.JPG"
                alt="Dasuni Nawarathna"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block', borderRadius: 10, filter: 'grayscale(10%) contrast(1.05)' }}
              />
              {/* Corner accents */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 52, height: 52, borderLeft: '2.5px solid var(--gold)', borderBottom: '2.5px solid var(--gold)', borderRadius: '0 0 0 10px', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 52, height: 52, borderRight: '2.5px solid var(--gold)', borderTop: '2.5px solid var(--gold)', borderRadius: '0 10px 0 0', pointerEvents: 'none' }} />
            </div>

            {/* Content */}
            <div>
              <SectionLabel text="About Me" />

              <h2
                className="heading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.75rem' }}
              >
                Who Am I
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.75rem', color: 'var(--text-secondary)', lineHeight: 1.82, fontSize: '0.95rem' }}>
                <p>
                  My name is <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Dasuni Nawarathna</strong>. I&apos;m an Information Technology undergraduate at the{' '}
                  <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Sri Lanka Institute of Information Technology (SLIIT)</strong>, currently in my second year.
                  I&apos;m passionate about building scalable web solutions, modern UI/UX, and AI-powered applications.
                </p>
                <p>
                  With experience spanning full-stack development, system architecture, and creative design, I combine technical rigor with an eye for detail.
                  I also hold a Diploma in English from the IBA Campus — enabling clear professional communication across every project.
                </p>
              </div>

              {/* CTA */}
              <div style={{ marginTop: '2rem' }}>
                <a
                  href="/resume.pdf"
                  id="about-cv"
                  download
                  className="gold-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.85rem 2rem', fontSize: '0.85rem', textDecoration: 'none' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom divider */}
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)' }} />
      </section>

      {/* ════════════════════════════════════
          TECHNICAL SKILLS
      ════════════════════════════════════ */}
      <section id="skills" style={{ background: 'var(--bg-primary)', scrollMarginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6rem 2.5rem 7rem' }}>
          
          <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: 30, height: 2, background: 'var(--gold)', borderRadius: 2 }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Technical Expertise
              </span>
              <span style={{ display: 'block', width: 30, height: 2, background: 'var(--gold)', borderRadius: 2 }} />
            </div>
            <h2
              className="heading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-primary)' }}
            >
              My Skills & Technologies
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(200,145,58,0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Skill Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border)',
                  flexShrink: 0
                }}>
                  {getSkillIcon(skill.name)}
                </div>

                {/* Skill Info */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                    {skill.name}
                  </h3>
                  <Stars rating={skill.rating} />
                </div>
              </div>
            ))}
          </div>

        </div>
        
        {/* Bottom divider */}
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)' }} />
      </section>

      {/* ════════════════════════════════════
          PROJECTS
      ════════════════════════════════════ */}
      <section id="work" style={{ background: 'var(--bg-secondary)', scrollMarginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6rem 2.5rem 7rem' }}>

          <div style={{ marginBottom: '3.5rem' }}>
            <SectionLabel text="Selected Work" />
            <h2
              className="heading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-primary)' }}
            >
              Featured Projects
            </h2>
          </div>

          {/* Project Filters */}
          <div style={{
            display: 'inline-flex',
            gap: 6,
            marginBottom: '3rem',
            padding: 6,
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)',
            borderRadius: 100,
            flexWrap: 'wrap'
          }}>
            {['All', 'Next.js', 'Java', 'PWA'].map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className="glass-btn"
                style={{
                  padding: '0.5rem 1.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: 99,
                  border: 'none',
                  color: projectFilter === filter ? 'var(--gold)' : 'var(--text-secondary)',
                  background: projectFilter === filter ? 'var(--bg-card)' : 'transparent',
                  boxShadow: projectFilter === filter ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {projectsData
              .filter((p) => projectFilter === 'All' || p.filterType === projectFilter)
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                  imagePath={project.imagePath}
                />
              ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CONTACT
      ════════════════════════════════════ */}
      <section id="contact" style={{ background: 'var(--bg-primary)', scrollMarginTop: 68 }}>

        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6rem 2.5rem 5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <SectionLabel text="Contact" />
              <h2
                className="heading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '1.5rem' }}
              >
                Get In Touch
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.82, fontSize: '0.95rem', maxWidth: 380 }}>
                I am currently open to internship opportunities and collaborative software projects.
                I welcome professional inquiries via any of the platforms below.
              </p>
            </div>

            {/* Right — links */}
            <div>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                Elsewhere
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {contacts.map(({ label, detail, href, icon }) => (
                  <li key={label} style={{ borderBottom: '1px solid var(--border)' }}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '1.1rem 0', textDecoration: 'none', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      <span style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center' }}>{icon}</span>
                      <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{label}</span>
                      <span style={{ marginLeft: 'auto', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{detail}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer */}
          <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © 2026 Dasuni Nawarathna — Crafted with passion.
          </div>
        </div>
      </section>

    </main>
  );
}