function StudentProfile() {
    return (
        <div>
            
            <div className ="student-profile">
                <img src = "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" className="profile-picture" />
                <h1 className="name">First Name, Last Name</h1>
                <div>
                <p className= "social-media"> <i class="fa fa-envelope"></i>Email</p>
                </div>
                <div>
                
                <p className= "social-media"> <i class="fa fa-linkedin-square"></i>LinkedIn</p>
                </div>
                <div>
                
                <p className= "social-media"> <i class="fa fa-github"></i>GitHub</p>
                </div>
                <div>
                
                <p className= "social-media"> <i class="fa fa-instagram"></i>Instagram</p>
                </div>

            </div>
        </div>
    )
}

export default StudentProfile;