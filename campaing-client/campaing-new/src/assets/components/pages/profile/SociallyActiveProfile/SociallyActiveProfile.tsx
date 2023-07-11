import React from 'react';
import "./SociallyActiveProfile.css"
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useProfile } from '../../../../services/apiProfile';

export function SociallyActiveProfile() {

    const { data: profile, error, isLoading } = useProfile(1);

    
 

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>is loading <PacmanLoader color="#36d7b7" /></p>;


  return (
    <div>
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />

      <link href="https://fonts.googleapis.com/css?family=Lato:400,300" rel="stylesheet" type="text/css" />

      <div className="box">
        <div id="overlay">
          <div className="image">
            <div className="trick"></div>
          </div>
          <ul className="text">{profile?.userName}</ul>
          <div className="text1">userType:{profile?.userType}</div>
          <div className="text1">twitter User name:{profile?.twitterUsername}</div>
          <div className="text1">email:{profile?.email}</div>

          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="" aria-controls="collapseOne">
                    <div className="title btn btn-danger btn-outline btn-lg">points table</div>
                  </a>
                </h4>
              </div>
           
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <div className="title btn btn-danger btn-outline btn-lg">purchases</div>
                  </a>
                </h4>
              </div>
              
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <div className="title btn btn-danger btn-outline btn-lg">Profile update</div>
                  </a>
                </h4>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

