using System;
using System.Runtime.InteropServices;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Command;

public class EditActivity
{

    public class Command : IRequest
    {
        public required Activity Activity { get; set; }
    }

    public class Handler(AppDbContext context, IMapper _mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken) ?? throw new Exception("Cannot find Activity");

            // activity.Title = request.Activity.Title;
            _mapper.Map(request.Activity, activity);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
