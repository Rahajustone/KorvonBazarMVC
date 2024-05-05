using System;
using KorvonBazar.MVC.Core.Domain;
using KorvonBazar.MVC.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace KorvonBazar.MVC.Persistence.Repositories;

public class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(ApplicationDbContext context) : base(context)
    {
    }
}

