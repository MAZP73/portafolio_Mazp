const Contacto = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Construyamos algo <br className="hidden sm:block" /> juntos
                    </h1>

                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-2">
                        Ponerse en contacto
                    </div>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=zamiguelangel.zam@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-base sm:text-lg font-medium text-black underline underline-offset-4"
                    >
                        zamiguelangel.zam@gmail.com
                    </a>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                    <form
                        action="https://formsubmit.co/zamiguelangel.zam@gmail.com"
                        method="POST"
                        className="space-y-4 sm:space-y-5"
                    >
                        <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio web" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="Nombre"
                                required
                                placeholder="Ingresa tu nombre"
                                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Correo
                            </label>
                            <input
                                type="email"
                                name="Correo"
                                required
                                placeholder="Ingresa tu correo"
                                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Mensaje
                            </label>
                            <textarea
                                name="Mensaje"
                                rows={4}
                                required
                                placeholder="Cuéntame sobre tu proyecto"
                                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-md text-sm sm:text-base font-medium hover:bg-gray-900 transition"
                        >
                            Enviar mensaje →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
