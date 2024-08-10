const ContactSection = () => {
    return (
        <section
        className="bg-gray-50 w-full mt-12 md:mt-16 h-32">
            <div
            style={{ maxWidth: "1400px"  }}
            className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-between">
                <span>Care</span>
                <ul className="flex justify-between">
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </section>
    )
}

export default ContactSection;