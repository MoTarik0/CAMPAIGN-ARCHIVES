/* --- CONTENT DATA (VERBATIM) --- */
const bookContent = [
    // --- COVER ---
    {
        type: 'cover',
        section: 'cover',
        front: `
            <div class="cover-content">
                <div class="cover-title">JOURNAL</div>
                <div class="cover-subtitle">of Seraphiel Valerion</div>
                <div style="margin-top: 50px; font-size: 3em;">❧</div>
            </div>
        `,
        back: `
            <div class="ink-stain" style="top: 10%; left: 10%;"></div>
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <p style="font-style: italic; color: #777;">Property of Seraphiel Valerion.<br>If found, please return to the Temple of Eldath.</p>
            </div>
        `
    },

    // --- IDENTITY / INTRO ---
    {
        type: 'normal',
        section: 'intro',
        front: `
            <h1>Identity</h1>
            <p><span class="crossed-out">Obviously not all of my pure Dreams were true.</span></p>
            <p>The world is not as I thought.</p>
            <p>The peace I believed in — was it ever real?</p>
            <p>I have seen those who prayed to Eldath burn, and beasts I was told were soulless plead for their lives. My heart feels torn between faith and truth.</p>
            <div class="handwritten-note">Guilt for the goblins. For the priests. For believing peace was a lack of war.</div>
            <p>Anger at the guards, at the city, at myself for being naive.</p>
            <p>Fear that the world is too cruel for my faith to survive.</p>
            <p>But beneath it all, resolve — that old truth carved into my soul:</p>
            <blockquote>“Peace is not stillness. It is bond. Break it, and you break yourself.”</blockquote>
        `,
        back: `
            <h2>My Companions</h2>
            <p>Traveling with them feels like standing at the edge of a storm — each of us holding our own kind of chaos.</p>
            <p>I wonder if this is what the goddess meant by “bond.”</p>
            <p>If peace truly is connection, then perhaps this is my trial:</p>
            <p class="emphasis">to find harmony among the broken, even when I am breaking too.</p>
            <hr>
            <p>So many broken souls, all orbiting each other in this cursed city.</p>
            <p>I used to believe peace meant stillness — no conflict, no chaos.</p>
            <p>But peace now feels like standing in the middle of a fire, holding the hands of those who still burn.</p>
        `
    },

    // --- PEOPLE / OBSERVATIONS ---
    {
        type: 'normal',
        section: 'people',
        front: `
            <h1>Reflections</h1>
            <div class="ink-stain" style="top: 20%; right: 10%;"></div>
            <p>Ravenwood’s evil wears human faces — calm, smiling, righteous.</p>
            <p>They speak of order while burning faith.</p>
            <p>They twist mercy into propaganda.</p>
            <p>I used to think monsters had claws and teeth.</p>
            <p class="emphasis">Now I see them dressed in silk, holding quills instead of blades.</p>
            <hr>
            <p>The rebellion, the nobles, the outcasts — everyone here seems to be fighting a different kind of war.</p>
            <p>Some fight for freedom, some for control, some simply to survive.</p>
            <p>And here I stand, torn between them all, trying to carry peace like a candle in the wind.</p>
            <p>I wonder if Eldath watches me still… or if even She has turned away from this city.</p>
        `,
        back: `
            <h2>The Four of Us</h2>
            <p>I think something is wrong with us.</p>
            <p>Not with the world—gods know the world is already broken—but with <span class="emphasis">us</span>, the four who walk through it pretending to be the ones who will fix it.</p>
            <p>Martin laughs while others bleed.<br>
            Larry smiles when he shouldn’t.<br>
            Sylph preaches kindness yet burns the dead.<br>
            And I… I am starting to choose survival over mercy.</p>
            <p>Every time they cross a line, I tell myself:<br>
            <em>I can pull them back.<br>
            I can remind them who they are.<br>
            I can be the balance.</em></p>
            <p>But after what happened at The Sleeping Goat, I am not certain anymore.</p>
        `
    },
    {
        type: 'normal',
        section: 'people',
        front: `
            <p>They wanted to torture AM.<br>
            They <em>did</em> torture him.<br>
            Their hands left marks I had to scrub from the floorboards.</p>
            <p>And the terrible thing is…<br>
            I cleaned them.<br>
            I covered their sins for them.</p>
            <p>I told myself it was to protect the group.<br>
            But now I wonder if I was protecting myself from having to admit the truth:</p>
            <h3>We are not heroes.<br>Not yet.<br>Maybe not ever.</h3>
            <p>I fear they are slipping—each in their own direction, each for their own reasons.</p>
        `,
        back: `
            <p>Martin is rotting from the inside, eaten by selfishness and fear.<br>
            Larry hides his darkness behind intellect and jokes.<br>
            Sylph, gods bless him, walks blindly into righteousness so twisted he cannot see the damage he leaves behind.</p>
            <p>And me?</p>
            <p>I saw a man begging for mercy, and instead of freeing him… I put him into sleep so deep he may never wake.</p>
            <p>I keep telling myself it was mercy. But was it?</p>
            <p>The truth is… I am afraid.</p>
            <p>Afraid that the corruption I see in them is also growing in me.<br>
            Afraid that the distant shape in my dreams is not a prophecy—but a warning.</p>
        `
    },
    {
        type: 'normal',
        section: 'people',
        front: `
            <p>If they continue down this path, I may be forced to choose:</p>
            <p class="emphasis">My companions… or my goddess.<br>
            My friends… or my principles.<br>
            Peace… or them.</p>
            <p>And I don’t know what that choice will make of me.</p>
            <hr>
            <p>I couldn’t kill any of them.<br>
            Not even the Redbrands who nearly ended me.</p>
            <p>But during the fight…<br>
            my magic changed.<br>
            I used almost exclusively <em>necrotic</em> spells.<br>
            Not because I chose to—because it came to me.</p>
            <p>There was no time to think—only instinct.</p>
        `,
        back: `
            <h2>The Hideout</h2>
            <p>We returned to the ruined forest house, carrying the unconscious girl we had kidnapped Ivy, though I did not know her name yet. Martin cooked while we all sat on the broken kitchen floor, the open wall exposing half the forest. Larry shared his alcohol and insisted on a strange ritual: one shot each, and we reveal something about ourselves.</p>
            <p>I did not expect honesty from this group. I still don’t know if what they said counts as honesty, but…it was something.</p>
            <p>Larry went first. A pirate. Of course he was. It explains far too much and far too little at the same time. A life of bloodshed and theft softened by moments of helping the poor — or so he claims. I want to believe him. I don’t know if I should.</p>
        `
    },
    {
        type: 'normal',
        section: 'people',
        front: `
            <p>I told them about my family of merchants, the gold-plated blade I never cared for, the distress call from Ravenwood, and the elders who sent me. As I spoke, I felt strange…like I was remembering who I truly was, after weeks of hiding behind disguises and compromises. I showed them the blade. I told them the gold meant nothing to me. I don’t know if any of them understood.</p>
            <p><span style="color:#b2a2c7">Sylph</span> nearly drank the entire bottle instead of one shot. I stopped him. He told us he’s around fifty — still a child by elven standards. Abandoned, raised by a church, then abandoned faith entirely. I don’t understand his logic, but I understand the pain beneath it.</p>
        `,
        back: `
            <p><span style="color:#b2a2c7">Martin</span>…was the vaguest. Someone died. Someone he loved. He failed to protect them. He will not fail again. He carries a ring he won’t explain. He speaks like a man made of locked doors.</p>
            <p>When <span style="color:#b2a2c7">Ivy</span> remained unconscious, we finally built the hideout an underground maze only accessible through Mold Earth, which everyone can cast except me. Convenient. Annoying. I try not to show jealousy, but yes, I hate that spell.</p>
            <p>We built rooms, ventilation shafts, and a prison. It isn’t a cell. It’s a tomb — darkness, no door, only stone and fear. We placed <span style="color:#b2a2c7">Ivy</span> inside, tied to a chair.</p>
        `
    },

    // --- RAVENWOOD / JOURNEY --- 
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <h1>The Journey</h1>
            <p>In the morning, <span style="color:#b2a2c7">Martin</span> and I both awoke early. He said he was meeting someone he did not say who. I told him I was meeting <span style="color:#b2a2c7">Voilet</span>. He objected, then relented, after insisting on giving me a new disguise outfit.</p>
            <p>I agreed.</p>
            <p>I met <span style="color:#b2a2c7">Voilet</span> behind <span style="color:#b2a2c7">Teta Sally</span>’s shop. She brought magical scrolls selling them at cost, refusing any profit. She said it was the best way she could help me. And she was right.</p>
            <p>I did not expect her to give me a gift for Larry a ring with a dangerous one-use invisibility enchantment. A joke, but a cruel one. I didn’t question her reasons.</p>
        `,
        back: `
            <p>Then the guard arrived. She hugged me, kissed my cheek, slapped me, called me her neglectful lover. I played along, created a flower, placed it in her hand, and the guard believed every word.</p>
            <p>She smiled as I left.</p>
            <div class="handwritten-note">I wonder if I deserve her kindness.</div>
            <p>Two hours I waited outside the hideout because I cannot cast Mold Earth. I meditated while Martin finally returned to open the ground.</p>
            <p>When I handed <span style="color:#b2a2c7">Larry</span> the ring, he figured out the truth instantly. His rage was…impressive. And childish. And justified.</p>
        `
    },
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <h2>Ivy's Truth</h2>
            <p>Then <span style="color:#b2a2c7">Ivy</span>.</p>
            <p>I disguised my voice, wore a mask, fed her lies about being the only good one among monsters. She was starving. Her eyes followed the steak like a dying animal watching its last hope.</p>
            <p>She told me everything she could. About the gang. About <span style="color:#b2a2c7">Viska</span>. About the ranks. About drugs, gambling, extortion. About Merida’s tribute. About Marco, one of the Lieutenants. About <span style="color:#b2a2c7">Thomas</span> — the ghost-leader of the Sons of Ravenwood.</p>
            <p>And then the final truth:<br>
            <span style="color:#b2a2c7">Thomas</span> and <span style="color:#b2a2c7">Master Viska</span> are brothers. The gangs came from one family split apart.</p>
        `,
        back: `
            <p>She begged me to free her.</p>
            <p>I left without speaking, holding my tears like a physical weight in my throat.</p>
            <p>The others were shocked by my performance. So was I.</p>
            <p>But my decision stands:<br>
            Ivy will be free tonight.</p>
            <hr>
            <p>We reached the city with plans. But the city had other plans.</p>
            <p>A crowd gathered. Three men in chains. The Eagle and noble-district guards. They demanded the “Resistance member” reveal themselves, or the three men would die.</p>
        `
    },
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <p>And <span style="color:#b2a2c7">Sylph</span> sweet, naïve <span style="color:#b2a2c7">Sylph</span> stepped forward. Confessed. Surrendered.</p>
            <p>The guards struck him down. Held him with magic. And no one NOT A SINGLE SOUL moved to stop it.</p>
            <p>My holy light ignited. My rage became radiant. I would have died for him, right there, if <span style="color:#b2a2c7">V</span> hadn’t grabbed me and whispered,<br>
            “Not now.”</p>
            <p>Cowards. The city is full of cowards.</p>
            <p>I lowered my head because I had no choice.</p>
            <p>But <span style="color:#f79646">Eldath</span> saw my anger.<br>
            And I think the city did too.</p>
        `,
        back: `
            <h2>The Resistance</h2>
            <p>After the last time <span style="color:#b2a2c7">V</span> guided us through hidden paths, we finally arrived at a house meant to shelter hope. He asked us to wait outside.</p>
            <p>Those moments were unbearable.</p>
            <p>I was forced to listen to <span style="color:#b2a2c7">Martin’s</span> cruel words, and to <span style="color:#b2a2c7">Larry’s</span> shameful agreement with him—that what <span style="color:#b2a2c7">Sylph</span> did was foolishness, stupidity, a waste. That his sacrifice was not worth saving. I could not lift my head. My thoughts returned again and again to a simple truth: <span style="color:#b2a2c7">Sylph</span> was the first soul in this cursed city who helped me without asking for anything in return. I will not abandon such a person. I cannot.</p>
        `
    },
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <p>When we entered, we found a modest meeting hall—so modest that even the children’s table in my family’s home was cleaner. But appearances do not define purpose.</p>
            <p>There were faces I recognized, and others I did not.</p>
            <p>I saw <span style="color:#b2a2c7">J</span> again, this time without her mask. One of her eyes is gone. She is still as vile and stubborn as ever. I also saw someone who made my heart tighten with emotion: <span style="color:#b2a2c7">Father Paul</span>, priest of <span style="color:#f79646">Eldath</span>, the one I saved during the fire. The same man who handed me the envelope that set me on this path. Fate has a cruel sense of humor.</p>
            <p>Beside him sat a mage named <span style="color:#b2a2c7">Victor</span> quiet, hesitant, stuttering, almost painfully innocent in appearance. And then there was <span style="color:#b2a2c7">Lucas</span>, leader of the resistance. Long hair, plain clothes. I could not tell whether that was humility or poverty.</p>
        `,
        back: `
            <p>They did not recognize us at first because of our disguises. Once we removed them, I bowed to Father Paul and asked for a map. They told me to sit, to breathe, and promised they would help.</p>
            <p>We talked.</p>
            <p>Then everything went wrong.</p>
            <p>They began calling <span style="color:#b2a2c7">Sylph</span> reckless. An idiot. A liability. Something inside me snapped. I stood and shouted that this was not stupidity it was courage. That the line between the two is thin, and that Sylph crossed it knowingly. He sacrificed his freedom, his soul, to save innocents he barely knew. That is nobility in its purest form.</p>
        `
    },
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <p><span style="color:#b2a2c7">Lucas</span> calmed me, then explained that Sylph was not the only prisoner. Two others were taken:</p>
            <ul>
                <li><span style="color:#b2a2c7">Lyrith</span>, from the old resistance team <span class="crossed-out">the one who took The Eagle’s eye</span>, betrayed long ago by <span style="color:#b2a2c7">AM</span>.</li>
                <li>Their merchant, whose imprisonment explains their financial weakness.</li>
            </ul>
            <p>Freeing three prisoners instead of one would be a major operation but also a devastating blow to the government.</p>
            <p><span style="color:#b2a2c7">Lucas</span> asked us plainly: <em>Are you with us or not?</em></p>
            <p>We said yes.</p>
            <p>All except <span style="color:#b2a2c7">Martin</span>, who demanded payment.</p>
        `,
        back: `
            <p>I argued with him until my voice shook. Demanding money to save someone who fought beside us is not pragmatism it is rot. <span style="color:#b2a2c7">Lucas</span> stopped us before it turned into something worse.</p>
            <p>After a long silence, I asked the question that had been poisoning my heart:</p>
            <h3>“Why are we saving this city? Does it truly deserve to be saved?”</h3>
            <p><span style="color:#b2a2c7">J</span> nearly drew her sword.</p>
            <p>I told them the truth. I barely know this city. Since arriving, it has given me nothing but pain physical and psychological. Its people endure oppression, poverty, and cruelty, then return to their homes as if nothing happened. Even after a stranger sacrificed himself for them, they did not change. They did not even try.</p>
        `
    },
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <p>Why should we save a city that refuses to save itself?</p>
            <p>Even <span style="color:#b2a2c7">Father Paul</span> had no answer. He only apologized said he was the one who sent the call to the Feywild. The one who brought me here.</p>
            <p>After I calmed myself, I spoke again.</p>
            <p>I am still here because it is <em>right</em>. Because if I leave now, I will never become the person I believed I was. And because I promised <span style="color:#b2a2c7">V</span> that I would defend this city with my soul and I do not break promises.</p>
            <p>Silence followed.</p>
        `,
        back: `
            <p><span style="color:#b2a2c7">Lucas</span> then spoke of the city’s past: the orc attack led by <span style="color:#b2a2c7">Gorath</span>, the deaths, the failed resistance, the exhaustion that hollowed the people out. They tried once—and failed. That failure still haunts them.</p>
            <p>He then laid out a map of the sheriff’s office. Together, we planned the operation.</p>
            <p><span style="color:#b2a2c7">J </span>and <span style="color:#b2a2c7">Martin</span> both wanted <span style="color:#b2a2c7">The Eagle</span> dead. I refused. Killing him gains us nothing. Alive, he is leverage. Information. Balance. <span style="color:#b2a2c7">Lucas</span> agreed and ordered <span style="color:#b2a2c7">J</span> to stand down.</p>
        `
    },
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <p><span style="color:#b2a2c7">Victor</span> volunteered to come with us but swore he would not kill again. Only later did I understand: he once served the government himself.</p>
            <p>We told them about our forest hideout, our spies, the guards we defeated. They were shocked by how much we had accomplished in only two days. It gave them hope.</p>
            <p>We agreed to spread false information through our pawn in the government, then visited <span style="color:#b2a2c7">Charlotte</span>. She greeted us with hostility but wore a shirt with a cat on it, and owned a book full of cat pictures. Even scoundrels have softness hidden somewhere.</p>
            <p>After shouting and arguing, she agreed to help.</p>
        `,
        back: `
            <p>When we left, I reflected on them all.</p>
            <p><span style="color:#b2a2c7">Lucas</span> reminds me of myself. A mediator. A politician. He hides his true thoughts, guiding others subtly toward unity. His leadership is quiet, seasoned, and dangerous in its intelligence.</p>
            <p><span style="color:#b2a2c7">Victor</span> carries immense regret. I hope he finds peace. His stutter is not weakness it is humanity.</p>
            <p><span style="color:#b2a2c7">J</span> is a child whose homeland was stolen. Her rage is understandable, but her methods are unforgivable.</p>
            <p>And <span style="color:#b2a2c7">Martin</span>…</p>
            <p>He proves again and again that he cares only for himself. I try...<span style="color:#f79646">Eldath</span> knows I try to see the good in him.</p>
            <p>But some days, it feels like staring into a well with no bottom.</p>
        `
    },
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <div class="ink-stain"></div>
            <p>Tonight, I asked a question I was afraid to ask:</p>
            <blockquote>Does this city deserve saving?</blockquote>
            <p>No one had an answer.</p>
            <p>And yet, I remain.</p>
            <p>Not because the city is worthy...but because <span class="emphasis">I must be</span>.</p>
            <p>If I leave now, I will never become the person I believed Eldath called me to be. I will not break my promise to V. I will not abandon those who stood beside me.</p>
            <p class="emphasis">Even if this city does not want peace…<br>I will carry it anyway....</p>
        `,
        back: `
            <h1>The Prison Break</h1>
            <p>The plan was clever. Perhaps too clever for the chaos that followed.</p>
            <p>While <span style="color:#b2a2c7">Martin</span> and <span style="color:#b2a2c7">J</span>, stormed the front — drawing <span style="color:#b2a2c7">The Eagle’</span>s gaze like a distraction — <span style="color:#b2a2c7">Larry</span>, <span style="color:#b2a2c7">Victor</span>, and I slipped through the cracks of the world.</p>
            <p><em>Misty Step</em>. A breath of magic, and we were inside.</p>
            <p>I knew them. I knew the Eagle brought mages.<br>
            So I brought <em>Silence</em>.<br>
            I cast the spell the moment my feet touched the stone, drowning their words, their commands, their incantations.</p>
        `
    },
    {
        type: 'normal',
        section: 'ravenwood',
        front: `
            <p>I saw the Eagle reach for his bell — a desperate, terrified motion — but no sound came.<br>
            The silence was absolute. And in that silence, we brought the storm.</p>
            <p>We cast <em>Sleep</em>. Guards fell like puppets with cut strings.<br>
            For a moment, it felt like victory.<br>
            But violence is never clean.</p>
            <p>One of them found me. An arrow, sharp and sudden.<br>
            Pain flared, white-hot, and my control... slipped.<br>
            I didn't mean to.<br>
            <em>I swear I didn't mean to.</em></p>
            <p>My magic lashed out, not to stop him, but to unmake him. One moment he was a soldier doing his duty; the next, he was... gone.</p>
            <span class="crossed-out">Necrotic energy. Dark. Hungry.<br>It is becoming part of me, and I am terrified.</span>
        `,
        back: `
            <p>We found <span style="color:#b2a2c7">Sylph</span>. I handed him my scimitar, and he fought with the desperation of the damned.</p>
            <p>And then... we found <span style="color:#b2a2c7">Lyrith</span>.</p>
            <p>Or what was left of him.<br>
            An arm gone. A leg gone. An eye torn out.<br>
            We freed him, thinking we were giving him liberty.<br>
            Instead, we gave him the chance to become a monster.</p>
            <p>He transformed. Not into a beast, but into a nightmare — a giant spider, woven from rage and pain.<br>
            He didn't run. He hunted.<br>
            He teleported behind <span style="color:#b2a2c7">The Eagle</span> and...<br>
            Gods.</p>
        `
    },
    // --- JOURNAL (Page 1) ---
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p>He wrapped him in silk. He dissolved him. Slowly.<br>
            The <em>Silence</em> held the <span style="color:#b2a2c7">Eagle</span>’s screams, but it could not hide the look in his eyes as he was unmade.</p>
            <p><span style="color:#b2a2c7">Lyrith</span> had to be stopped. He was no longer the man who fought for freedom; he was a creature of pure suffering.<br>
            J told me to free him. Now, I regret listening.<br>
            I walked to him, ignoring the chaos.<br>
            I cast <em>Inflict Wounds</em>.<br>
            I didn't aim to kill. I aimed to break the form.</p>
            <p>The magic struck, and the spider shrieked — a sound of tearing reality — and collapsed.<br>
            The monster melted away. The man returned.<br>
            Unconscious. Broken. But alive.</p>
        `,
        back: `
            <p>We escaped. We freed the merchant. We carried <span style="color:#b2a2c7">Lyrith</span>’s shattered body with us.<br>
            As we left, I looked back at his cell.<br>
            There was no keyhole.<br>
            The Eagle never intended to let him go. That cell was not a holding pen; it was a tomb. All because <span style="color:#b2a2c7">Lyrith</span> once defended himself? Because he took an eye?<br>
            The savagery of this world is not in the monsters we fight. It is in the men who build cells without keys.</p>
            <p>On the way out, I grabbed a terrified guard. I fed him a lie — that <span style="color:#b2a2c7">the Eagle</span> was not dead, that this was all an illusion.<br>
            "Tell them we aren't the villains," I whispered.<br>
            He believed me.</p>
        `
    },
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p>But as we run into the night, carrying a man who was dismantled piece by piece, I look at my hands.<br>
            One held the silence. The other struck a friend to save him.</p>
            <h3>Are we heroes?<br>Or are we just survivors in a world that wants us dead?</h3>
            <hr>
            <h1>Weight of Gold and Blood</h1>
            <p>I killed him.</p>
            <p>Not with a blade in the heat of a duel. Not in defense of another.<br>
            I looked at a man — a guard, someone with a life, a name, perhaps a family — and I... unmade him.<br>
            His head. One moment it was there, and the next... mist. Red mist.</p>
        `,
        back: `
            <p>The anger that surged through me wasn't mine. It felt... darker. Older.<br>
            And the worst part?<br>
            I pretended it didn't happen.<br>
            When we rested in the abandoned house, I acted as if I were still Seraphiel the Gentle, Seraphiel the Mediator.<br>
            I am a liar.<br>
            I kidnapped a girl. I drove a man insane. And now I am a killer.<br>
            Is this what it means to save a city? To become the thing you hate?</p>
            <h2>The Merchants</h2>
            <p>To distract myself, I spoke to the merchant we saved. <span style="color:#b2a2c7">Arthur</span>.<br>
            I asked him about <span style="color:#b2a2c7">Eliah Brightbrook</span>.</p>
        `
    },
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p>He knew him, of course. Everyone knows the Valerions.<br>
            "Someone common like you would never be able to reach him," he said.</p>
            <p>So I played the card I promised myself I would never play.<br>
            I told him who I was.<br>
            I showed him my gold-plated weapons — the symbols of the wealth I despise.<br>
            And just like that, the arrogance vanished. He bowed. He scraped. He became a servant.<br>
            Gods, I hate trade. I hate how money changes men faster than magic.</p>
            <p>I told him I would mention him to my family. A lie? A half-truth? It doesn't matter. It bought his loyalty.<br>
            We need gold. The others need equipment. We are fighting a war with nothing but stolen scraps.</p>
        `,
        back: `
             <p>I asked for 1,000 gold pieces.<br>
            Arthur choked, but promised he could get it — not from his own pockets, but through another merchant.<br>
            <span style="color:#b2a2c7">Karl</span>.</p>
            <p>Arthur called him a "socialist" — a man who hates the rich and believes in equality. A man Arthur claims is "worse" than him.<br>
            Why is it that in this city, the man who wants equality is considered "worse" than the man who bows to gold?<br>
            We need Arthur to introduce us. I cannot walk into Karl's world alone; not with a Valerion name that reeks of the very wealth he despises.</p>
            <p>Arthur agreed, but there is a price.</p>
        `
    },
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p>A "simple task" first.<br>
            There is always a task. And it is never simple.<br>
            In Ravenwood, nothing is simple.</p>
            <p>He wants us to teach a lesson to a man named <span style="color:#b2a2c7">Jax</span>.<br>
            A Tabaxi. An inspector.<br>
            And when Arthur described him, I felt a cold knot of recognition.</p>
            <p>We know him.<br>
            We drank with him. We gambled with him at <span style="color:#b2a2c7">The Sleeping Goat Tavern</span>.<br>
            <span style="color:#b2a2c7">Larry</span> took his money with a grin, and we laughed, thinking he was just another drunk soul in a broken city.<br>
            We were wrong.</p>
        `,
        back: `
             <p><span style="color:#b2a2c7">Jax</span> is the one who inspects supplies entering Ravenwood.<br>
            He takes bribes to let resistance goods pass, then reports the smugglers to the guards.<br>
            He betrayed <span style="color:#b2a2c7">Arthur</span>.<br>
            And as the pieces fit together, I am almost certain Jax is the reason <span style="color:#b2a2c7">Sylph</span> was arrested.</p>
             <hr>
            <h1>The Monster in the Mirror</h1>
            <p>He touched my shoulder.</p>
            <p>I flinched. Not because of him, but because of the stain on my soul I was trying to hide.</p>
        `
    },
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p><strong>Three days.</strong><br>
            In three days, I have committed three mortal sins.<br>
            <strong>I kidnapped a girl.</strong><br>
            <strong>I drove a man to madness.</strong><br>
            <strong>I killed a guard.</strong></p>
            <p>And tonight... I fear I killed the little hope Martin had in me.</p>
            <p>He asked to speak privately. It was strange—the first time he has sought my counsel, and just after learning of my family's wealth. My cynicism flared instantly.<br>
            "What do you want? To criticize me as usual?" I mocked him. I laughed at him. I, the "good" one, laughed at a man who was trying to be better, desperate to cover the sound of the guard's death echoing in my mind.</p>
        `,
        back: `
            <p>He criticized my "kind" principles, telling me I would be exploited, that I couldn't save everyone.<br>
            "You must be good to those close to you before those far away," he argued. "Don't sacrifice yourself for a stranger. Don't equate your friend with some random person on the street."</p>
            <p>I ignored him. I didn't want to believe he had any wisdom to offer. I didn't want to believe he cared.<br>
            But then he told me of his brother—murdered, hanged from a tree in the center of this city when he first arrived.<br>
            I fell silent.</p>
            <p>He admitted he doesn't know how to do "good." He asked to discuss decisions with me, to blend his pragmatism with my "ethics." He wants to change. He wants to be better.</p>
        `
    },
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p>And that made me furious.<br>
            How could the person I hate the most be honest with himself when I am living a lie?</p>
            <p>I lost control. I punched the wall until the stone cracked and my knuckles bled. The physical pain was a relief—it drowned out the truth.<br>
            <span class="crossed-out"><strong>Am I a monster?</strong></span><br>
            <span class="crossed-out"><strong>Am I a monster?</strong></span><br>
            <span class="crossed-out"><strong>Am I a monster?</strong></span></p>
            <h3>Maybe I'm a real monster.</h3>
            <p>I tried to leave, but he called me back. He wasn't done.</p>
        `,
        back: `
            <p>He told me of his plan. A <strong>Beggar's Institution</strong>.<br>
            Not just a soup kitchen, but a community. A family for the unwanted.<br>
            He wants to give them food and shelter, but in exchange, they would become our eyes and ears—an intelligence network built on loyalty.<br>
            "I want to give them a purpose," he said. "Ensure they are active members, helping themselves."</p>
            <p>He asked for my financial help, my "artistic" eye for the design.<br>
            And I... I called him a filth. I told him he was just an exploiter, that he had some dirty personal goal. I threw his vulnerability back in his face.</p>
        `
    },
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p>He walked to the window, then turned to me.<br>
            "I told you I was searching for someone close to me. My fiancée. She was taken from me. She was everything good in me."<br>
            He looked at me with eyes that held no deception.<br>
            "If there is any goodness in me, it is because of her. I don't want that part of me to die."</p>
            <p>I was stunned.<br>
            A woman loved Martin? And Martin... he truly wants to preserve her light within him.<br>
            He is a better man than I gave him credit for. Perhaps better than me.</p>
            <p>But I was a bastard. I didn't want him to be better.</p>
        `,
        back: `
            <p>Why?<br>
            Because if <em>he</em> can change... if <em>he</em> can find light in this darkness... then what excuse do I have for the darkness growing in me?</p>
            <p>I gave him three impossible conditions to join him, just to push him away.<br>
            He didn't get angry. He just said he wouldn't accept that as my answer, because if he did, he would never deal with me again.<br>
            "Something is wrong with you today," he said.</p>
            <p>He is right.<br>
            He doesn't know I killed a man. He doesn't know I am rotting from the inside.</p>
        `
    },
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p>I left him standing there. Outside, I found a cat—a fey creature summoned by Victor.<br>
            It looked at me with eyes that seemed to know everything I had done.</p>
            <p>I am not the hero of this story.<br>
            I am simply the one writing it down before the ink turns to blood.</p>
        `,
        back: `
            <h1>The Dream</h1>
            <p>I keep seeing it again.<br>
            Not a place — not really — more like a shape, far away.<br>
            At first, it was only a point, small and harmless, somewhere at the end of an endless white horizon. It used to shimmer, as if it were calling.</p>
            <p>But since the Goblin Cave… the light has changed.<br>
            It’s closer now.<br>
            Not enough to make out what it is, only enough to know that it’s not light anymore. It flickers like flame behind fog — pale, then dark, then pale again.</p>
        `
    },
    {
        type: 'normal',
        section: 'journal',
        front: `
            <p>Sometimes, when I wake, I think I can hear something in that direction. Not words, not even whispers — I can’t tell what it is.</p>
            <p>I tell myself it’s nothing — just exhaustion, the weight of everything we’ve seen.<br>
            But it feels alive.<br>
             It’s as if someone, or something, is walking toward me from the other end of that horizon.</p>
            <p>I can’t see its face.<br>
            Only the outline — tall, uncertain, almost like a reflection blurred on water. When I stare too long, it feels familiar. I always turn away before I understand what it is.</p>
        `,
        back: `
             <p>After the cave, the shape took one step closer.<br>
            I felt it... I don’t know how.</p>
            <p>Maybe I’m imagining it.<br>
            Still… every night I pray to Eldath before sleep, and still the horizon waits for me.<br>
            And that distant shape keeps coming... I feel it.</p>
            <hr>
            <p>The dream returned.<br>
            The point on the horizon… it steps closer each night.<br>
            Still faceless.<br>
            Still flickering.</p>
            <h3>I don’t know if it walks toward me,<br>or if I walk toward it.</h3>
        `
    }
];

class Book {
    constructor() {
        this.container = document.getElementById('book');
        this.pages = [];
        this.currentPageIndex = 0; // 0 is cover
        this.totalPages = 0;

        this.init();
    }

    init() {
        // Create Pages
        bookContent.forEach((data, index) => {
            const page = document.createElement('div');
            page.className = 'page';
            page.id = `page-${index + 1}`;
            page.style.zIndex = bookContent.length - index;

            // Front Face
            const front = document.createElement('div');
            front.className = 'page-face front';
            front.innerHTML = data.front + `<span class="page-num">${(index * 2) + 1}</span>`;

            // Back Face
            const back = document.createElement('div');
            back.className = 'page-face back';
            back.innerHTML = data.back + `<span class="page-num">${(index * 2) + 2}</span>`;

            page.appendChild(front);
            page.appendChild(back);
            this.container.appendChild(page);
            this.pages.push(page);

            // Click handling
            page.addEventListener('click', () => {
                this.handlePageClick(index);
            });
        });

        this.totalPages = this.pages.length;
    }

    handlePageClick(index) {
        // If clicking the current visible page (on right), flip it forward
        if (index === this.currentPageIndex) {
            this.pages[index].classList.add('flipped');
            this.pages[index].style.zIndex = index + 1; // Move to top of left stack
            this.currentPageIndex++;
        }
        // If clicking the previous page (on left), flip it back
        else if (index === this.currentPageIndex - 1) {
            this.pages[index].classList.remove('flipped');
            setTimeout(() => {
                this.pages[index].style.zIndex = this.totalPages - index; // Restore original z-order
            }, 600); // Delay z-index switch until halfway through anim
            this.currentPageIndex--;
        }
    }

    goToSection(sectionName) {
        // Find the first page of the section
        let targetIndex = -1;

        if (sectionName === 'cover') targetIndex = 0;
        else {
            targetIndex = bookContent.findIndex(p => p.section === sectionName);
        }

        if (targetIndex === -1) return;

        // If target is ahead, flip everything up to it
        if (targetIndex >= this.currentPageIndex) {
            for (let i = 0; i < targetIndex; i++) {
                this.pages[i].classList.add('flipped');
                this.pages[i].style.zIndex = i + 1;
            }
            this.currentPageIndex = targetIndex;
        }
        // If target is behind, unflip everything back to it
        else {
            for (let i = this.pages.length - 1; i >= targetIndex; i--) {
                this.pages[i].classList.remove('flipped');
                this.pages[i].style.zIndex = this.totalPages - i;
            }
            this.currentPageIndex = targetIndex;
        }
    }
}

class Lock {
    constructor() {
        this.inputs = document.querySelectorAll('.dial-input');
        this.code = ['B', 'O', 'N', 'D'];
        this.currentInput = ['', '', '', ''];
        this.screen = document.getElementById('lock-screen');
        this.journal = document.getElementById('journal-scene');

        this.init();
    }

    init() {
        this.inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                const val = e.target.value.toUpperCase();
                e.target.value = val; // Force input visual update

                if (val.length > 0) {
                    this.currentInput[index] = val;
                    // Move to next
                    if (index < 3) this.inputs[index + 1].focus();

                    this.checkCode();
                } else {
                    this.currentInput[index] = '';
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && input.value === '') {
                    if (index > 0) this.inputs[index - 1].focus();
                }
            });
        });
    }

    checkCode() {
        const entered = this.currentInput.join('');
        if (entered.length === 4) {
            if (JSON.stringify(this.currentInput) === JSON.stringify(this.code)) {
                this.unlock();
            } else {
                this.shake();
                // Clear validation
                setTimeout(() => {
                    this.inputs.forEach(i => i.value = '');
                    this.currentInput = ['', '', '', ''];
                    this.inputs[0].focus();
                }, 500);
            }
        }
    }

    shake() {
        const lockMech = document.querySelector('.lock-mechanism');
        lockMech.classList.add('error-shake');
        setTimeout(() => lockMech.classList.remove('error-shake'), 400);
    }

    unlock() {
        this.screen.classList.add('unlocking');

        setTimeout(() => {
            this.screen.classList.add('unlocked');
            this.journal.classList.add('visible');
        }, 800);
    }
}

// Instantiate
document.addEventListener('DOMContentLoaded', () => {
    window.Book = new Book(); // Global for onclick handlers
    new Lock();
});
