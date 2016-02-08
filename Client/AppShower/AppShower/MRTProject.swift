//
//  MRTProject.swift
//  AppShower
//
//  Created by Martin on 2/7/16.
//  Copyright © 2016 Martin. All rights reserved.
//

import UIKit

enum projectStatus {
    case Waiting
    case Funded
    case Cancelled
    case Unknown
}


class MRTProject: NSObject {
    
    let projectId: String?
    let startedAt: NSDate?
    let authors: [MRTUser]?
    let status: projectStatus?
    let estimatedBudget: NSDecimalNumber?
    let potentialIssues: [String]?
    let flexibility: String?
    let strategy: String?
    let mission: String?
    let goal: String?
    let name: String?
    
    init(projectId: String,
        startedAt: NSDate,
        authors: [MRTUser],
        status: projectStatus,
        estimatedBudget: NSDecimalNumber,
        potentialIssues: [String],
        flexibility: String,
        strategy: String,
        mission: String,
        goal: String,
        name: String) {
            
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            self.projectId = projectId
            
    }
}
