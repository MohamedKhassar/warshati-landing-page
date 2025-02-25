import Image from "next/image"
import Link from "next/link"
import contact from "/public/images/contact.png"
import { contacts, socials } from "@/lib/data"
const ContactUs = () => {


    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative bg-light-gray">
            <h1 className="font-extrabold lg:text-[82px] md:text-4xl text-2xl text-center">Contactez nous</h1>
            <div className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">Entrez vos coordonnées, nous vous contacterons pour répondre à vos besoins.
                </p>
            </div>
            <div className="bg-white p-3 flex max-lg:flex-col gap-5 items-start justify-center lg:w-[90%] place-self-center border shadow-2xl shadow-black/30 rounded-3xl relative">
                {/* contact information */}
                <div className="relative bg-[#011C2B] text-white font-Poppins rounded-xl h-full p-12 space-y-48 lg:w-1/2 w-full">
                    <div className="space-y-3">
                        <h1 className="text-[28px] font-semibold">Contact Information</h1>
                        <p className="text-lg max-w-96">Écrivez quelque chose pour démarrer une discussion !</p>
                    </div>
                    <div className="space-y-16">
                        {
                            contacts.map(({ Icon, value }, index) => (
                                <div className="flex items-center gap-5" key={index}>
                                    <Icon />
                                    <p className="max-w-72">{value}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex gap-8 flex-wrap">
                        {
                            socials.map(({ Icon, link }, index) => (
                                <Link href={link} className="bg-violet-800 p-2 rounded-full hover:bg-violet-100 hover:text-violet-900 duration-500 z-10" key={index} target="_blank">
                                    <Icon />
                                </Link>
                            ))
                        }
                    </div>
                    <div className="bg-[#FFF9F921] rounded-full size-80 absolute -bottom-24 -right-32 z-0"></div>
                    <div className="bg-[#FFF9F921] size-32 absolute bottom-24 right-24 z-0 rounded-full"></div>
                </div>
                {/* contact form */}
                <form className="grid grid-cols-2 gap-16 p-10 w-full">
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Prénom</label>
                    </div>
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Nom</label>
                    </div>

                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="email" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">email</label>
                    </div>
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Numéro</label>
                    </div>

                    <div className="col-span-2 gap-y-7 flex flex-col-reverse">
                        <textarea id="" className="outline-none border-b-2 focus:border-black border-black placeholder-shown:border-gray-400 peer w-full" placeholder="Écrivez votre message."></textarea>
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Message</label>
                    </div>
                    <div className=" place-self-end col-span-2  flex flex-col">
                        <button className="rounded-xl bg-violet-500 text-violet-100 p-5 place-self-end">Envoyer un message</button>
                        <Image src={contact} alt="" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs