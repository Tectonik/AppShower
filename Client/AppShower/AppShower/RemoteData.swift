//
//  RemoteData.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

class RemoteData {
    
    var allPojects:[MRTProject]?
    
    init() {
        self.allPojects = [
            MRTProject.init(id: "Aydeee", startedAt: nil , authors: nil, status: projectStatus.Waiting, estimatedBudget: 1565465465, potentialIssues: nil, flexibility: nil, strategy: nil, mission: nil, goal: nil, name: "Jorgen's fools party!"),
            
            MRTProject.init(id: "Aydeee", startedAt: nil , authors: nil, status: projectStatus.Waiting, estimatedBudget: 1565465465, potentialIssues: nil, flexibility: nil, strategy: nil, mission: nil, goal: nil, name: "Jorgen's hans party!"),
            
            MRTProject.init(id: "Aydeee", startedAt: nil , authors: nil, status: projectStatus.Waiting, estimatedBudget: 1565465465, potentialIssues: nil, flexibility: nil, strategy: nil, mission: nil, goal: nil, name: "Strauss' hans party!")
        ];
    }
    
    func addNewProject(newProject: MRTProject) {
        self.allPojects?.append(newProject)
        
        
    }
    
}
