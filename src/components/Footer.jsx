export default function Footer() {
    return (
         <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8 rounded-full overflow-hidden shadow-lg w-24 h-24 mx-auto">
            <img src="assets/Cindy-logo.webp" alt="Cindy Melo Rodgerson logo" width={100} />
          </div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Cindy Melo Rodgerson, M.S. CCC-SLP
            </h3>
            <p className="text-background max-w-2xl mx-auto">
              Helping children find their voice and reach their communication potential.
              Licensed Speech-Language Pathologist serving Salt Lake City and surrounding areas.
            </p>
          </div>

          <div className="border-t border-border border-primary pt-8">
            <p className="text-primary text-sm">
              &copy; 2025 Cindy Melo Rodgerson. All rights reserved. | License # 9142271-4102
            </p>
          </div>
        </div>
      </footer>
    )
}