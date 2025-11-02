import GithubButtons from "../components/GithubButtons";
import "/src/styles/Present.css";
import "/src/styles/Fonts.css";

function Present() {
    return (
        <section className="section">
            <h2 className="header montserrat">
                Revolutionary Editor
            </h2>
            <p className="text montserrat">
                Aenean cursus imperdiet nisl id fermentum. Aliquam pharetra dui laoreet 
                vulputate dignissim. Sed id metus id quam auctor molestie eget ut augue.
            </p>
            <div className="button-container">
                <GithubButtons />
            </div>
        </section>
    );
}

export default Present