import React from 'react';
import PageTitle from '../Components/PageTitle';
import Categories from '../Components/Categories';
import PortfolioItem from '../Components/PortfolioItem';

function PortfolioPage() {
    return (
        <div className="PortfolioPage">
            <div>
                <PageTitle title={'Portfolio'} span={'Portfolio'}/>
            </div>
            <div className="portfolios">
                <h3 className="placeholder-text">Coming Soon!</h3>
            </div>

        </div>
    )
}

export default PortfolioPage
