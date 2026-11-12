import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={
 title:'NEXORA — Campus Intelligence',
 description:'A premium interactive digital twin and intelligence command center for connected campuses.',
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body>{children}</body></html>;
}